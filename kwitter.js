var firebaseConfig = {
    apiKey: "AIzaSyDAi7wRiv5EkEPMfJYo3CC2Gg4wSj__PVc",
    authDomain: "project-94-e4a99.firebaseapp.com",
    databaseURL: "https://project-94-e4a99-default-rtdb.firebaseio.com",
    projectId: "project-94-e4a99",
    storageBucket: "project-94-e4a99.appspot.com",
    messagingSenderId: "458940241843",
    appId: "1:458940241843:web:5a18d59310facdf8de5dc6",
    measurementId: "G-Z41JQXVB4L"
};

firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
    window.location = "kwitter_room.html";
}