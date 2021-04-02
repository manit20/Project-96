  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD47D2k6qj7kjvPPjMM4_GPHy2yH-z5638",
    authDomain: "kwitter-project-1318b.firebaseapp.com",
    databaseURL: "https://kwitter-project-1318b-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-1318b",
    storageBucket: "kwitter-project-1318b.appspot.com",
    messagingSenderId: "786228157552",
    appId: "1:786228157552:web:a0a05ef666e4825c63e8b5"
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
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}

function logOut(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}