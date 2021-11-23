import  firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBntKn4az-ObLR1hcRIjhPI-UjZTFoWyFQ",
    authDomain: "chat-a-4cd22.firebaseapp.com",
    databaseURL: "https://chat-a-4cd22-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-a-4cd22",
    storageBucket: "chat-a-4cd22.appspot.com",
    messagingSenderId: "492932274686",
    appId: "1:492932274686:web:d77a92b47e887506cf48af"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

export const rootRef=db.ref("root");
export const chatsRef=rootRef.child("chats");
export const messagesRef=rootRef.child("messages");
export const profileRef=rootRef.child("profile");