// test
// <!-- dynamic database Firebase  -->
{/* <script src="https://www.gstatic.com/firebasejs/5.0.1/firebase.js"></script> */}

(function(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBXClgn7mQSFFFyy4xtDTjVf18ht2SSkLc",
      authDomain: "myplaner-0504.firebaseapp.com",
      databaseURL: "https://myplaner-0504.firebaseio.com",
      projectId: "myplaner-0504",
      storageBucket: "myplaner-0504.appspot.com",
      messagingSenderId: "219717761"
    };
    firebase.initializeApp(config);

// document reference
const preObj = document.getElementById('object');

// database reference
const dbRefObj = firebase.database().ref().child('object');

// sync object changes
dbRefObj.on('value', function(snapshot) {
    preObj.innerHTML = JSON.stringify(snapshot.val(),null,3);
});
}());

