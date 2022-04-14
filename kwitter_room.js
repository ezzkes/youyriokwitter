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
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom(){
 room_name=document.getElementById("room_name").value
 firebase.database().ref("/").child("room_name").update({
 porpuse:"adding room_name"
 });
 localStorage.setItem("room_name", room_name);
 window.location = "kwitter_page.html";
}
function redirectToRoomName(name) { console.log(name);
 localStorage.setItem("room_name", name);
 window.location = "kwitter_page.html";
}
function logout(){
 localStorage.removeItem("user_name")
 localStorage.removeItem("room_name")
 window.location="index.html"
}
