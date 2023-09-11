import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAMkovjyaDyRCKjYi0qrR6kdTf7g-Y6haw',
  authDomain: 'journal-5120c.firebaseapp.com',
  projectId: 'journal-5120c',
  storageBucket: 'journal-5120c.appspot.com',
  messagingSenderId: '618061119341',
  appId: '1:618061119341:web:9a9f9b8596be5f95a62464',
  measurementId: 'G-H2J5ZVR0E3',
};

export const useFirebase = () => {
  const app = initializeApp(config);

  const db = getFirestore(app);
  const storage = getStorage(app);
  const auth = getAuth(app);

  return { db, storage, auth };
};
