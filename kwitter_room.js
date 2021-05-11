//ADD YOUR FIREBASE LINKS HERE
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
document.getElementById("user_name").innerHTML = "wassup " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class ='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      Window.location = "index.html";
}