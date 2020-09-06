import firebase from "firebase";


//initializing the firebase by sending the apikey and authdomain.

firebase.initializeApp({
    apiKey: "AIzaSyAf-HtONWFlXk00ZYMWDY2gNIHjjaQ33ew",
    authDomain: "bobble-assessment.firebaseapp.com"
})


const auth = firebase.auth();
const Googleprovider = new firebase.auth.GoogleAuthProvider();
const Facebookprovider = new firebase.auth.FacebookAuthProvider();


const signInWithGoogle = () => {
    auth.signInWithPopup(Googleprovider);
};
const signInWithFacebook = () => {
    auth.signInWithPopup(Facebookprovider);
};

export default {
    auth: auth,
    signInWithGoogle: signInWithGoogle,
    signInWithFacebook: signInWithFacebook
}

