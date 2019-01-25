import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCWPlB7FeTpgg9LdElKy5XzlLv7TtWBgh4",
  authDomain: "annie-todo.firebaseapp.com",
  databaseURL: "https://annie-todo.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
