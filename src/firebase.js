import firebase from 'firebase/app'
import "firebase/auth";

let config = {
    apiKey: "AIzaSyDCmoOTRuA2pYzmIG0x2BEXDmeH5UogrKA",
    authDomain: "virtus-ecd33.firebaseapp.com",
    databaseURL: "https://virtus-ecd33.firebaseio.com",
    projectId: "virtus-ecd33",
    storageBucket: "virtus-ecd33.appspot.com",
    messagingSenderId: "609830186037"
};
firebase.initializeApp(config);

export default firebase;