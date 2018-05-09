// main code script
     // hold op!


     
// function writeFormToDatabase(form) {
//     var i,j, jobArray,jobName,category,obj,temp;
//     obj 
//     category = document.getElementsByTagName("h2"); 
//     for (j in category){
//         category[j-1] += ":"; 
//         for (i in $("dmdd").length){
//             jobName[i-1] = "job"+i+":";
//             temp[i-1] = {"job"i:{
//                 "per":form.per[i-1].value,
//                 "mas":form.mas[i-1].value,
//                 "tid":form.tid[i-1].value}};
//             }
//          obj[j-1] = {category[j-1]:temp[j-1]};
//     }
     
// }

function writeData(form){
  // var  projectName = document.getElementsById("#projektnavn");
  var projectName = "DTU";
    firebase.database().ref('projekt/DTU').set({
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
            },
            "Tømrer" : {
              "job1" : {
                "per" : form.per[2].value,
                "mas" : form.mas[2].value,
                "tid" : form.tid[2].value
              },
              "job2" : {
                "per" : form.per[3].value,
                "mas" : form.mas[3].value,
                "tid" : form.tid[3].value
              }
            },
            "Maler" : {
              "job1" : {
                "per" : form.per[4].value,
                "mas" : form.mas[4].value,
                "tid" : form.tid[4].value
              }
            },
            "Eletriker" : {
              "job1" : {
                "per" : form.per[5].value,
                "mas" : form.mas[5].value,
                "tid" : form.tid[5].value
              },
              "job2" : {
                "per" : form.per[6].value,
                "mas" : form.mas[6].value,
                "tid" : form.tid[6].value
              }
            },
            "Oprydning" : {
              "job1" : {
                "per" : form.per[7].value,
                "mas" : form.mas[7].value,
                "tid" : form.tid[7].value
              },
              "job2" : {
                "per" : form.per[8].value,
                "mas" : form.mas[8].value,
                "tid" : form.tid[8].value
              }
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



