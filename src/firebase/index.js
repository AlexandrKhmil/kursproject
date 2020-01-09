import firebase from 'firebase'
import "firebase/auth"
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
export const timestamp = firebase.firestore.Timestamp

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

// Load Products in Banner
export const loadBannerProducts = () => {
	return db.collection('bannerProducts').get().then(querySnapshot => {
    let R = {} 
		querySnapshot.forEach(doc => 
      R = { ...R, [doc.id]: doc.data() }   
    ) 
		return R
	})
}

// Registration

export const registrateUser = (email, password) => { 
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) { 
		var errorCode = error.code;
		var errorMessage = error.message;
		console.log(errorCode)
		console.log(errorMessage) 
	}) 
}

// Auth 
export const authUser = (email, password) => {
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		console.log(errorCode)
		console.log(errorMessage) 
	});
}

// SignOut
export const signOut = () => {
	firebase.auth().signOut()
}
 
// Get User Data   
export let firebaseAuth = firebase.auth() 

// Place Order
export const placeOrder = (data) => {
	db.collection("orders").add(data)
		.then(function(docRef) { 
			console.log("Document successfully written!"); 
			return docRef.id;
		})
		.catch(function(error) {
			console.error("Error writing document: ", error);
		})
}
 
// Get Orders List
export const getOrders = () => {
	return db.collection('orders').get().then(querySnapshot => {
		let R = {}
		querySnapshot.forEach(doc => R = { ...R, [doc.id]: doc.data()})
		return R
	})
}