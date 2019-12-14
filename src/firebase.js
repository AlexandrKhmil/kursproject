import firebase from './firebase';
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

export const db = firebase.firestore();

export let loadData = () => {
    let array = [];

    db.collection('products').get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                array.push(doc.data());
            })
        })

    return array; 
}

export default firebase;