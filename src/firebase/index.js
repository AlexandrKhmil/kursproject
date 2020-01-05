import firebase from 'firebase'
require('firebase/firestore')

let firebaseConfig = {
	apiKey: "AIzaSyDS2NxCJHQeHiVfJ_5OM2tbYeLM8mISBOE",
	authDomain: "electrical-store.firebaseapp.com",
	databaseURL: "https://electrical-store.firebaseio.com",
	projectId: "electrical-store",
	storageBucket: "electrical-store.appspot.com",
	messagingSenderId: "1058980837762",
	appId: "1:1058980837762:web:6bf1dbee853245d7a4379b" 
}

firebase.initializeApp(firebaseConfig)

// Cloud Firestore

const db = firebase.firestore()

// Storage

const storage = firebase.storage()
const storageRef = storage.ref()
 
// Load Products  

const loadProductsData = () => {
	// Return array from Cloud Firestore whithout images
	return db.collection('products').get().then(querySnapshot => {
    let R = {} 
		querySnapshot.forEach(doc => 
      R = { ...R, [doc.id]: doc.data() }   
    ) 
		return R
	})
}

const loadProductImage = src => {
	// Returns product's image by image's name from Firestore Storage
	const imageRef = storageRef.child(`products/${src}`)
	return imageRef.getDownloadURL()
		.then(url => url)
		.catch(error => console.log(error))
}

export const loadProducts = async () => {
  let P = await loadProductsData() 
  for (let K in P) {
    let I = await loadProductImage(P[K].img)
    P[K] = { ...P[K], imgURL: I } 
  } 
  return P 
}

// Write Functions

export const placeOrder = (data) => {
	db.collection("orders").add(data)
	.then(function(docRef) { 
		console.log("Document successfully written!"); 
		return docRef.id;
	})
	.catch(function(error) {
		console.error("Error writing document: ", error);
	});
}