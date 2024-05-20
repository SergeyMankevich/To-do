import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDF998hPvxosbmCBLuJiAevh03NkJmXYK8',
	authDomain: 'todoproject-79cfb.firebaseapp.com',
	projectId: 'todoproject-79cfb',
	storageBucket: 'todoproject-79cfb.appspot.com',
	messagingSenderId: '5890023842',
	appId: '1:5890023842:web:6dc5ffe553d974154312fb',
	databaseURL:
		'https://todoproject-79cfb-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
