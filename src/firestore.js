// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDmHAdg15lQ4Ltf6GO6UobEuENM4CKSnVE',
  authDomain: 'aum-app-7dc34.firebaseapp.com',
  projectId: 'aum-app-7dc34',
  storageBucket: 'aum-app-7dc34.appspot.com',
  messagingSenderId: '966691951923',
  appId: '1:966691951923:web:f80ececaf697a31c375a46',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const addTest = async (path, data) => {
  await setDoc(doc(db, 'test_exams', path), data)
}

const getTest = async path => {
  const docRef = doc(db, 'test_exams', path)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data())
  } else {
    console.log('No such document!')
  }
}

const getSubjectNameArr = async () => {
  const querySnapshot = await getDocs(collection(db, 'test_exams'))
  let subjects = []
  querySnapshot.forEach(doc => {
    subjects.push(doc.id)
  })
  return subjects
}

export { getTest, addTest, getSubjectNameArr }
