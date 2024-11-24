// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCyX8GRKs24tlbGT3_zSi7LqSm9PuIFv40',
  authDomain: 'my-kaspi-ped.firebaseapp.com',
  projectId: 'my-kaspi-ped',
  storageBucket: 'my-kaspi-ped.firebasestorage.app',
  messagingSenderId: '220957418065',
  appId: '1:220957418065:web:7ee89216199362d3054e70',
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
