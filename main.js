// main code script
     // hold op!
function writeFormToDatabase(form) {
    var i, jobArray,jobName;
    var
    for (j in $("div.container-fluid")){
        for (i = 0; i < $('table >tbody >tr').length; i++){
            jobArray = JSON.stringify(
                {form.job-per.value,
                                        form.job-mas.value,
                                        form.job-tid.value]);
            jobName = 
        }
    }
    // firebase.database().ref('job-base').set({
    //     : name
    // });        
}
// function  readToiletParameters(){
//     firebase.database().ref('name-base').on()
// }



function giveittome(form) {
    var newName = form.name.value;
    alert('your name is: ');
}

$(document).ready(function(){
    $("#row").click(function(){
        var rows = $('table >tbody >tr').length;
        
    });
});



