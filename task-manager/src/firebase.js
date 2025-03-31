import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDCFAmhsc23hiToCEHocHpYZBLbEFRrS60',
  authDomain: 'todo-66997.firebaseapp.com',
  projectId: 'todo-66997',
  storageBucket: 'todo-66997.firebasestorage.app',
  messagingSenderId: '1027095624143',
  appId: '1:1027095624143:web:ae50ede1a20847dc133aba',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };