 // kilometerToMeter

   
 function kilometerToMeter(km){
    if (typeof km!= "number"){
        var errorText = "please input number"
     
        return errorText;
    }
    else{
         var meter = km * 1000;
         return meter;
    }
}
         //var result = kilometerToMeter(5);
         //console.log(result);


//budgetCalculator

function budgetCalculator(clock, phone, laptop) {
 if(clock < 0 || phone < 0 || laptop < 0){
     var errorText = "-Number are not allowed"
     return errorText;
 }
 else{
     var total = clock * 50 + phone * 100 + laptop * 500;
     return total
 }

}
     //var cost = budgetCalculator(3,7,332);
     //console.log(cost);


//hotelCost


function hotelCost(totaldays){
var totalStep = 0;
if (totaldays < 0 || typeof (totaldays) != "number"){
   var error = "You didn't book any day!"
   return error;
}
else if (totaldays <=10){
    totalStep =100 * totaldays;
}else if(totaldays <= 20){
    var firstStep = 100 * 10;
    var remaining = totaldays - 10;
    var secondStep = remaining * 80;
    totalStep = firstStep + secondStep;
}
else{
 var firstStep = 100 * 10;
 var secondStep = 80 * 10;
 var remaining = totaldays - 20;
 var thirdStep = remaining * 50;
 totalStep = firstStep + secondStep + thirdStep;
}
  return totalStep;
}
 // var cost = hotelCost(21);
 // console.log(cost);


//MegaFriend

function megaFriend(friends = [ "a ,b , c , d"]) {
 var largeName = friends[0];
 for(i = 0; i < friends.length; i++) {
      if (friends[i].length > largeName.length){
         largeName = friends[i];           
     }
 }
 return largeName
}
//var result = megaFriend(friends=["kalam", "joshim", "kuddddos"])
//console.log(result);