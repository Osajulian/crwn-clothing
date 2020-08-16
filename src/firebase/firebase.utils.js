import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAusi7CUBV7DeglPkOBlEZPHahwmtLCQuM",
    authDomain: "crwn-db-b18e6.firebaseapp.com",
    databaseURL: "https://crwn-db-b18e6.firebaseio.com",
    projectId: "crwn-db-b18e6",
    storageBucket: "crwn-db-b18e6.appspot.com",
    messagingSenderId: "602108366216",
    appId: "1:602108366216:web:fb0d2c705798bd3f21fe3d"
  };

  firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt:'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase