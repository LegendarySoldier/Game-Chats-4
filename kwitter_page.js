//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDDqgnSVLf75FkS9QB-epcT5lbUZq2Om4k",
    authDomain: "project-mission-impossible.firebaseapp.com",
    databaseURL: "https://project-mission-impossible-default-rtdb.firebaseio.com",
    projectId: "project-mission-impossible",
    storageBucket: "project-mission-impossible.appspot.com",
    messagingSenderId: "384303134478",
    appId: "1:384303134478:web:3745ea6c912feb0322095f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}

function logouts(){
    Window.location = "kwitter_room.html";
}