// test
// <!-- dynamic database Firebase  -->
{/* <script src="https://www.gstatic.com/firebasejs/5.0.1/firebase.js"></script> */}

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

function databar(){
    var obj = { "name":"John", "today":"new Date()", "city":"New York"};
    var myJSON = JSON.stringify(obj);
    var user = 'userdb'
    var database = firebase.database();
    database.ref('data/'+user).set(obj)
        .then(function(snapshot) {
            //success(); // some success method
        }, function(error) {
            console.log('error' + error);
            //error(); // some error method
        });
        alert(new Date())
}; 

