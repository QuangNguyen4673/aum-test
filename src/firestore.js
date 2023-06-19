// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'
import { collection, addDoc } from 'firebase/firestore'

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

const addTest = async () => {
  // console.log(db.collection('test_exams').document('laptrinhweb'))

  console.log(
    collection(db, 'test_exams', ['laptrinhweb', 'week1', 'attempt_0'])
  )
  try {
    const docRef = await addDoc(
      //collection(db,  'test_exams/laptrinhweb/week1/attempt_0'),
      collection(db, 'test_exams', ['laptrinhweb', 'week1', 'attempt_0']),
      {
        ques: ['hello'],
        ans: ['world'],
      }
    )
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

const getTest = async () => {
  const docRef = doc(db, 'test_exams', 'laptrinhweb/week1/attempt_0')
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data())
  } else {
    console.log('No such document!')
  }
}

export { getTest, addTest }
