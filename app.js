// rounting script using sammyJS
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
    
    // Define database reference 
    const dbRefproj = firebase.database().ref().child('projekter');

    

    // Make sidebar
    dbRefproj.on('child_added',function(snap){
        $("#sidebar").append('<a id="'+snap.key+'" href="#/'+snap.key+
            '" class="w3-bar-item w3-button">'+snap.key+'</a>');        
    });




    (function($){
        var app = $.sammy('#app',function(){
            // this.use('Mustache','ms');

            this.get('#/',function(){
                this.log("Page load success!");
                this.partial('oversigt.html');
                
            });
            this.get('#/:id',function(){
                // Variables 
                // var project = this.params.id;
                // const dbRefCurrentProj = dbRefproj.child(project);
                // alert(dbRefCurrentProj);
                this.partial('projectTemp.html');
            });
        });

        $(function(){
            app.run('#/');
        });
    })(jQuery);


    // Nyt projekt scripts 
   
})();

