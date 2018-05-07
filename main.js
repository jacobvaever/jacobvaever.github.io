// main code script
     // hold op!





    function saveToiletParameters(name) {
        firebase.database().ref('name-base').push().set({
            username: name
        });
        
    }

    $(document).ready(function(){
        $("button").click(function(){
            alert($("#name").val());
        });
    });


