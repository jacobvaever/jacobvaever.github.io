// main code script
     // hold op!
function newProject(){
  
};




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


  const preObjbect = document.getElementById('jacob');
  const dbRefObject = firebase.database().ref().child('jacob');
  dbRefObject.on('value', snap => consol.log(snap.val()));
})

function writeData(form){
  // var  projectName = document.getElementsById("#projektnavn");
  var projectName = "DTU";
    firebase.database().ref('DTU').set({
        "data" : {
            "Murer" : {
              "job1" : {
                "per" : form.per[0].value,
                "mas" : form.mas[0].value,
                "tid" : form.tid[0].value
              },
              "job2" : {
                "per" : form.per[1].value,
                "mas" : form.mas[1].value,
                "tid" : form.tid[1].value
              }
            // },
            // "Tømrer" : {
            //   "job1" : {
            //     "per" : form.per[2].value,
            //     "mas" : form.mas[2].value,
            //     "tid" : form.tid[2].value
            //   },
            //   "job2" : {
            //     "per" : form.per[3].value,
            //     "mas" : form.mas[3].value,
            //     "tid" : form.tid[3].value
            //   }
            // },
            // "Maler" : {
            //   "job1" : {
            //     "per" : form.per[4].value,
            //     "mas" : form.mas[4].value,
            //     "tid" : form.tid[4].value
            //   }
            // },
            // "Eletriker" : {
            //   "job1" : {
            //     "per" : form.per[5].value,
            //     "mas" : form.mas[5].value,
            //     "tid" : form.tid[5].value
            //   },
            //   "job2" : {
            //     "per" : form.per[6].value,
            //     "mas" : form.mas[6].value,
            //     "tid" : form.tid[6].value
            //   }
            // },
            // "Oprydning" : {
            //   "job1" : {
            //     "per" : form.per[7].value,
            //     "mas" : form.mas[7].value,
            //     "tid" : form.tid[7].value
            //   },
            //   "job2" : {
            //     "per" : form.per[8].value,
            //     "mas" : form.mas[8].value,
            //     "tid" : form.tid[8].value
            //   }
            // }
          }
        }
    });

    alert('succes!');  
}

// function  readToiletParameters(){
//     firebase.database().ref('name-base').on()
// }



// function giveittome(form) {
//     var newName = form.name.value;
//     alert('your name is: ');
// }

// $(document).ready(function(){
//     $("#row").click(function(){
//         var rows = $('table >tbody >tr').length;
        
//     });
// });



