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
            this.use('Template');

            this.get('#/',function(){
                this.log("Page load success!");
                this.partial('oversigt.html');
                
            });
            this.get('#/:id',function(context){
                // Variables 
                var x;
                var project = context.params.id;                
                const dbRefCurrentProj = dbRefproj.child(project);
                context.title = project;
                context.dbRef = dbRefCurrentProj;
                context.log(context);

                dbRefCurrentProj.on('value',function(snap){
                    var subNames = snap.child('subNames').val();
                    var subTimes = snap.child('subTimes').val();
                    var irlTimes = snap.child('irlTimes').val();
                    
                    context.jobNames = subNames;
                    context.jobTimes = subTimes;
                    context.newTimes = irlTimes;
                });
                context.color = ['','success', 'info','warning','danger'];
                context.sum = null;
                for( x in context.jobTimes){ context.sum += parseInt(context.jobTimes[x]);};
                 
                function toRealNumb(array){
                    for( var i in array){
                        array[i] = parseInt(array[i]);
                    } 
                return array;
                }
                context.est = toRealNumb(context.jobTimes);
                context.ast = toRealNumb(context.newTimes)


                //   context.log(toRealNumb(context.jobTimes))
                // context.log(context.sum);

                
                context.partial('projectTemp.template');
            });
            

            this.before({except: {path: '#/'}},function(){
                



            });


        });
        

        $(function(){
            app.run('#/');
        });
    })(jQuery);


    // Nyt projekt scripts 
   
})();

