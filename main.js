import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { fetchHistoryData } from './my-modules/fetch-history-data.js';
import { submitData } from './my-modules/submit-data.js';

// 設定情報
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.APP_I
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Cloud Firestoreの初期化
const db = getFirestore(app);

// Cloud Firestoreから取得したデータを表示する
if (document.getElementById('js-history')) {
  fetchHistoryData(getDocs, collection, db);
}

// Cloud Firestoreにデータを送信する
if (document.getElementById('js-form')) {
  document.getElementById('js-form').addEventListener('submit', (e) => submitData(e, addDoc, collection, db));
};