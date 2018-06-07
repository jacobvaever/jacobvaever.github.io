// main script

// nyt projekt 
var jq = $.noConflict();

jq(document).ready(function(){
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

  jq("#addproj").click(function(){ // adds a new line of parameter 
    var rows = jq('table >tbody >tr').length;
    jq("tbody").append('<tr><th class="input-group"><span class="input-group-addon">'+
      '<i class="glyphicon glyphicon-pencil"></i></span><input id="subname'+rows+
      '" type="text" class="form-control" placeholder="Navn på Delopgave"/></th><th><span class="input-group">'+
      '<span class="input-group-addon"><i class="glyphicon glyphicon-time">'+
      '</i></span><input id="subtime'+rows+'" type="number" class="form-control"'+
      ' placeholder="Timer det tag"/></span></th></tr>');
  });

  jq("#save").click(function(){ // saves the project in the database under its name
    var rows = jq('table >tbody >tr').length;
    var temp = jq('#name').val();
    
    if(temp != [] ){  
      var subNames = [],subTimes = [];
      for (i = 0; i < rows; i++){
        subNames[i] = jq("#subname"+i).val();
        subTimes[i] = jq("#subtime"+i).val();
        if((jq("#subtime"+(i+1)).val() && jq("#subname"+(i+1)).val()) == ""){
          break;
        }
      }
      data = {
              subNames,
              subTimes
            };

      firebase.database().ref('projekter/' + temp).set(data,function(error){
        if(error) {
          console.log('write to database failed!');
        } else {
          console.log('data saved successfully!');
        };
      });
    }else{alert('Du skal som minimum udfylde Projektnavn')};
                
  });
  
});

  



