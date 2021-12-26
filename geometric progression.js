//console.log("Hello !");


   var a = 2; 
   var r = 3; 
   var N = 4;

   function Nth_of_GP(a, r, N)
    { 
      
   return( a * Math.floor(Math.pow(r, N - 1)) ); 
       
    }

 console.log("The "+ N + "th term of the series is : "+ Nth_of_GP(a,r,N));