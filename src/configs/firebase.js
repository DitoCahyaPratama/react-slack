import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyDUNUZOxU91WSlXEjBEPeo3du5TLpXogig',
	authDomain: 'react-slack-7150a.firebaseapp.com',
	databaseURL: 'https://react-slack-7150a.firebaseio.com',
	projectId: 'react-slack-7150a',
	storageBucket: 'react-slack-7150a.appspot.com',
	messagingSenderId: '1010941258874',
	appId: '1:1010941258874:web:c83024c3d9914f28335fc3',
	measurementId: 'G-N3CXTDQ0DZ',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
