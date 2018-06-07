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
            this.use('Mustache');

            this.get('#/',function(){
                this.log("Page load success!");
                this.partial('oversigt.html');
                
            });
            this.get('#/:id',function(){
                // Variables 
                var project = this.params.id;
                var numJobs = null;
                var subNames = null;
                var subTimes = null;
                
                const dbRefCurrentProj = dbRefproj.child(project);
                this.title = project;
                dbRefCurrentProj.on('value',function(snap){
                    numJobs = snap.child('subNames').numChildren();
                    subNames = snap.child('subNames').val();
                    subTimes = snap.child('subTimes').val();



                return numJobs,subNames,subTimes;
                });
                this.jobNames = subNames;
                this.jobTimes = subTimes;
                
                

                this.partial('projectTemp.mustache');
            });
        });

        $(function(){
            app.run('#/');
        });
    })(jQuery);


    // Nyt projekt scripts 
   
})();

