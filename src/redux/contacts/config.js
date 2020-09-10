import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC-OMeGYJYd5E1W7dEy7bDb3zcoFFtKRFI',
  authDomain: 'zdrokv-4737c.firebaseapp.com',
  databaseURL: 'https://zdrokv-4737c.firebaseio.com',
  projectId: 'zdrokv-4737c',
  storageBucket: 'zdrokv-4737c.appspot.com',
  messagingSenderId: '979219245455',
  appId: '1:979219245455:web:d089390505b6931ccd43fa',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
