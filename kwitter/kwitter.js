var firebaseConfig = {
    apiKey: "AIzaSyAHWVr7KhXyHZyFPBByvp2Z59HD6OPXKbk",
    authDomain: "kwitter2-1cedc.firebaseapp.com",
    databaseURL: "https://kwitter2-1cedc-default-rtdb.firebaseio.com",
    projectId: "kwitter2-1cedc",
    storageBucket: "kwitter2-1cedc.appspot.com",
    messagingSenderId: "607014889340",
    appId: "1:607014889340:web:9fd9869bf023e980f166f9",
    measurementId: "G-M2HMD3LDVV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser()
{
user_name = document.getElementById("user-name").value
localStorage.setItem("user_name", user_name)
window.location = "kwitter_room.html";
}