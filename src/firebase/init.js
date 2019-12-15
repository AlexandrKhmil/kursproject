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
 
export let loadData = () => {
    return db.collection('products').get().then(querySnapshot => {
        let array = []; 
        querySnapshot.forEach(doc => { array.push(doc.data())});
        return array;
    });
}

export let loadProductImage = src => {
    const imageRef = storageRef.child(`products/${src}`); 
    return imageRef.getDownloadURL().then(url => url)
        .catch(function(error) {
            console.log(error);
        }); 
}

export default firebase;