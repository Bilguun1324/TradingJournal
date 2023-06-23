import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDlbme_JwePjjk1xqDbfIXxtaureYyU0Fs',
  authDomain: 'doc-fast.firebaseapp.com',
  projectId: 'doc-fast',
  storageBucket: 'doc-fast.appspot.com',
  messagingSenderId: '221901669818',
  appId: '1:221901669818:web:f55c5a8492c7eca3768983',
  measurementId: 'G-090HCDS98L',
};

export const useFirebase = () => {
  const app = initializeApp(config);

  const db = getFirestore(app);
  const storage = getStorage(app);
  const auth = getAuth(app);

  return { db, storage, auth };
};
