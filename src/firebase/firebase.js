import firebase from 'firebase';
require('firebase/firestore');

let firebaseConfig = {
    apiKey: "AIzaSyDS2NxCJHQeHiVfJ_5OM2tbYeLM8mISBOE",
    authDomain: "electrical-store.firebaseapp.com",
    databaseURL: "https://electrical-store.firebaseio.com",
    projectId: "electrical-store",
    storageBucket: "electrical-store.appspot.com",
    messagingSenderId: "1058980837762",
    appId: "1:1058980837762:web:6bf1dbee853245d7a4379b" 
};
firebase.initializeApp(firebaseConfig);

// Cloud Firestore

const db = firebase.firestore();

// Storage

const storage = firebase.storage(); 
const storageRef = storage.ref();
 
// Load Products  

const loadProducts = () => {
    // Return array from Cloud Firestore whithout images
    return db.collection('products').get().then(querySnapshot => {
        let array = [];  
        querySnapshot.forEach(doc => { 
            array.push(Object.assign({ id : doc.id }, doc.data())) });
        return array;
    });
}

const loadProductImage = src => {
    // Returns product's image by image's name from Firestore Storage
    const imageRef = storageRef.child(`products/${src}`); 
    return imageRef.getDownloadURL()
        .then(url => url)
        .catch(error => console.log(error)); 
}

const loadUrlForProducts = async () => {
    // Returns full list of products data
    let products = await loadProducts();
    for (let i = 0; i < products.length; i++) {
        products[i].img = await loadProductImage(products[i].img); 
    }
    return products;
}

export let firestoreProducts = loadUrlForProducts();

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


 
export default firebase;