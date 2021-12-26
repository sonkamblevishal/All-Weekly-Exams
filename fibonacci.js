console.log("Hello !");

var num=prompt("Enter number");
 
	var a = 0;
	var b = 1;
	var c = 0;

 console.log(num + "Th term of Fibonacci series: ")

	console.log(a);
	console.log(b);

 for(var i = 2; i <= num; i++)
{
	   c = a + b; 
   	   a = b; 
	   b = c; 

 	console.log(c);
}
