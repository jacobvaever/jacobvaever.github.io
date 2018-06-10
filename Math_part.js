function NewPlan(est, aet){
    // Sets the variables for the levels of employes
    var Newbie = 1.12;
    var Middle = 1; 
    var Good = 0.88; 
    var factorDiffPlus = 1.10; 
    var factorDiffMinus = 0.90; 
    
    // Calculates sum for estimated time and realtime
    var sum_est = 0; 
    for (i=0; i<est.length; i++){
        sum_est = sum_est + est[i]; 
    }
    var sum_aet = 0;  
    for (i=0; i<aet.length; i++){
        sum_aet = sum_aet + aet[i]; 
    }
    
    // Checks if a projekt is done
    if(aet.findIndex(k => k==0)==-1 ){
        return aet; 
    } else if(sum_aet == 0) {
        return est; 
    } else if(aet.find(k => k==0) == 0) {
        
        // While-loop to replace all zeros with new values
        while(aet.findIndex(k => k==0)!=-1){
            // Finds first zero in realtime
            var k = aet.findIndex(k => k==0); 
    
            // Finds the sum until the index of first zero
            var sum_est_k = 0; 
            for (i=0; i<k; i++){
                sum_est_k = sum_est_k + est[i]; 
            }
            var sum_aet_k = 0;  
            for (i=0; i<k; i++){
                sum_aet_k = sum_aet_k + aet[i]; 
            }
            
            // Insert new improved times 
            if(sum_est_k*factorDiffMinus > sum_aet_k){
                aet[k] = est[k]*Newbie; 
            } else if(sum_est_k*factorDiffPlus < sum_aet_k){
                aet[k] = est[k]*Good;
            } else if(sum_est_k*factorDiffMinus <= sum_aet_k && sum_est_k*factorDiffPlus >= sum_aet_k ){
                aet[k] = est[k]*Middle;
            }
           
        } 
        return aet;
    } 
}
    
function timeDiff(sum_est, sum_aet){
    // Colorcode the differences between estimated and realtime
    var diff = sum_est - sum_aet; 
      
    if (diff == 0){
       return ; //hvid farvekode
    } else if (diff < 0){
       return ; // rød farve
    } else if (diff > 0){
       return ; // grøn farve
    }
}
    
function toProcent(x){
    //First calculates sum for vector x
    var sum_x = 0; 
    for (i=0; i<x.length; i++){
        sum_x = sum_x + x[i]; 
    }
    
    // Turns the elements in vector into procentiles
    for (i=0; i<x.length; i++){
        x[i] = (x[i]/sum_x)*100; 
    }
    return x; 
}
    
function workLevel(est,aet1, cal, level){
    //
    var k = aet1.findIndex(k => k==0); 
    for(i=k; i<est.length; i++){
       var diff = est[i] - cal[i]; 
      
        if (diff == 0 && aet1[i]==0){
          level[i] = 'Middel'; 
        } else if (diff < 0 && aet1[i]==0 ){
          level[i] = 'God';
        } else if (diff > 0 && aet1[i]==0){
          level[i] = 'Nybegynder';
        }
    }
    return level; 
}
    
function sums(x){
    // Calculates sum for an input vector x
    var sum_x = 0; 
    for (i=0; i<x.length; i++){
        sum_x = sum_x + x[i]; 
    }
    return sum_x; 
}
    
function realBar(est, aet){
    // Real bar vector function to input the estimated values 
    while(aet.findIndex(k => k==0)!=-1){
        k = aet.findIndex(k => k==0);
        aet[k] = est[k]; 
    }
     return aet; 
}

// minor functions


// $(function(){

//     $("#update").click(function(){
//         alert($("#newtime").val());
//         // dbRefCurrentproj.child('irlTimes').update()
        
//     });
//     $("#button button").click(function(){
//         var updates = ast;
//         updates = ast[this.id];
//         alert(updates);
//     });
    
// });