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
user_name=localStorage.getItem("user_name");
const analytics = getAnalytics(app);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();