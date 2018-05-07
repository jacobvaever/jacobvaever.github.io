// main code script
     // hold op!
// $(document).ready(function(){
//     $("#save").click(function(){
//         var x = $("#input11").val();
//     });
// });

$(function(){
    function saveToiletParameters(name) {
        firebase.database().ref().set({
            username: name
        });
        
    }
   
});

saveToiletParameters(name);

