function sayiuret(UstLimit=49){

    return Math.ceil(Math.random() * UstLimit)
   
   
   
   }
   for(var i=1; i<=8; i++){
   console.log("KOLON"); 
    for(var j=1; j<=6; j++){
        console.log(sayiuret());
    }
   
   }
   