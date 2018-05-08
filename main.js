// main code script
     // hold op!
function writeToiletParameters(name) {
    firebase.database().ref('name-base').set({
        username: name
    });        
}
// function  readToiletParameters(){
//     firebase.database().ref('name-base').on()
// }

$(document).ready(function(){
    $("button").click(function(){
        writeToiletParameters($("#name").val());
        $
    });
});



