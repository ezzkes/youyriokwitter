var firebaseConfig = {
  apiKey: "AIzaSyD6vjUWT7_TaNTpR-WFNhJtQOlS2T0RAXk",
  authDomain: "aaaaaaaaaaaaaaaaaaaaaaaa-4604a.firebaseapp.com",
  databaseURL: "https://aaaaaaaaaaaaaaaaaaaaaaaa-4604a-default-rtdb.firebaseio.com",
  projectId: "aaaaaaaaaaaaaaaaaaaaaaaa-4604a",
  storageBucket: "aaaaaaaaaaaaaaaaaaaaaaaa-4604a.appspot.com",
  messagingSenderId: "945299035557",
  appId: "1:945299035557:web:31d720e13c48e60c4fc44c",
  measurementId: "G-9Z8REBWKCT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function adduser(){
user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose:"adding user"
});
}
