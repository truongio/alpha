import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyA76Xwb2GH88WPg_0YtuctS17qTTBxkK44',
  authDomain: 'alpha-74e29.firebaseapp.com',
  databaseURL: 'https://alpha-74e29.firebaseio.com',
  projectId: 'alpha-74e29',
  storageBucket: 'alpha-74e29.appspot.com',
  messagingSenderId: '1000690561428'
}
firebase.initializeApp(config)
firebase.auth().signInAnonymously().catch(function (error) {
  var errorCode = error.code
  var errorMessage = error.message
  console.log(errorCode, errorMessage)
})
export default {
  database: firebase.database()
}
