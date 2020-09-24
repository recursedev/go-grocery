import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDKSZXWxUNHAGpEOafg6V8vnHbcP3e6QbU",
    authDomain: "go-grocery-db.firebaseapp.com",
    databaseURL: "https://go-grocery-db.firebaseio.com",
    projectId: "go-grocery-db",
    storageBucket: "go-grocery-db.appspot.com",
    messagingSenderId: "385738168889",
    appId: "1:385738168889:web:a3274c6695a6c912b70be8",
    measurementId: "G-YN60PH7FK5"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  
  const userRef = firestore.doc(`users/${userAuth.uid}`);


  const snapShot = await userRef.get();




  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName, email,createdAt, ...additionalData
      })
    } catch(error) {
      console.log('Error creating user.', error.message);
    }
  }

  return userRef;
}

  firebase.initializeApp(config);


  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
  
    const batch = firestore.batch();
    objectsToAdd.forEach((obj) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
  
    return await batch.commit();
  };


  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const {title, items} = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
        
    })
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  },{})
  } 

  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});


  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;