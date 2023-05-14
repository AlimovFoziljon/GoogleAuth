import firebase from 'firebase/app'
import 'firebase/auth'

const config = firebase.initializeApp({
    apiKey: "AIzaSyAABmkp60wHANUXC92TLiYlLGjo8br_hrM",
    authDomain: "auth-23be2.firebaseapp.com",
    projectId: "auth-23be2",
    storageBucket: "auth-23be2.appspot.com",
    messagingSenderId: "206617658935",
    appId: "1:206617658935:web:ef220539aa8bad8a41a1b2",
    measurementId: "G-DB13P8XPSJ"
});

export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default config;