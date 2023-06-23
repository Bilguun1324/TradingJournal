import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query as fsQuery,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadString,
} from 'firebase/storage';
import { useFirebase } from './initialize';

interface SignInInfo {
  email: string;
  password: string;
  username: string;
  image?: string | null;
}

export const useCol = (path: string) => {
  const { db } = useFirebase();

  const getRecords = async () => {
    let data: any[] = [];
    const query = fsQuery(collection(db, path));
    const docs = await getDocs(query);
    docs.forEach((doc) => {
      console.log(doc.data());
      data = [doc.data(), ...data];
    });
    return data;
  };

  const getRecord = async (id: string) => {
    const docRef = doc(db, path, id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  };

  const createRecord = async (data: any, id: any) => {
    return setDoc(doc(db, path, id && id), {
      ...data,
    });
  };

  const updateRecord = async (data: any, id: String | any) => {
    return updateDoc(doc(db, path, id && id), { ...data });
  };

  const deleteRecord = async (id: any) => {
    return deleteDoc(doc(db, path, id));
  };

  return { createRecord, getRecords, updateRecord, deleteRecord, getRecord };
};

export const useDoc = async (path: string) => {
  const { db } = useFirebase();
  const docRef = doc(db, path);
  const data = (await getDoc(docRef)).data();

  const updateRecord = async (data: any) => {
    await setDoc(
      docRef,
      {
        ...data,
      },
      {
        merge: true,
      },
    );
    return 'success';
  };

  const deleteRecord = async () => {
    return await deleteDoc(docRef);
  };

  return { data, updateRecord, deleteRecord };
};

export const useAuth = () => {
  const { auth }: any = useFirebase();
  const signIn = async ({ email, password }: SignInInfo) => {
    await signInWithEmailAndPassword(auth, email, password);
    return auth.currentUser;
  };

  const signUp = async ({ email, password, username, image }: SignInInfo) => {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: username && username,
      photoURL: image && image,
    });
    return auth.currentUser;
  };

  const signOutUser = async () => {
    await signOut(auth);
  };

  return { signIn, signUp, signOutUser };
};

export const useStorage = (path: string) => {
  const { storage }: any = useFirebase();

  const uploadFile = async (file: string, name: string) => {
    const filePath = `${path}/${name}`;
    const reference = ref(storage, filePath);
    return uploadString(reference, file);
  };

  const deleteFile = (url: string) => {
    const reference = ref(storage, url);
    return deleteObject(reference);
  };

  const readFile = (url: string) => {
    const reference = ref(storage, `${path}/${url}`);
    return getDownloadURL(reference);
  };

  return { uploadFile, deleteFile, readFile };
};
