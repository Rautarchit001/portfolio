import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAKba24-Tj4qGPt7vgBSisngkE-K09kX8g",
  authDomain: "hareesh-e153f.firebaseapp.com",
  projectId: "hareesh-e153f",
  storageBucket: "hareesh-e153f.appspot.com",
  messagingSenderId: "752895958495",
  appId: "1:752895958495:web:aab1f01fbeba82fd5c786a",
  measurementId: "G-7QRD02HTYF"
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

export default storage;