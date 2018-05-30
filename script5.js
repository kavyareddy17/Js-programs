function showNumber5()
{  
    var a=document.getElementById("demo").value;
    alert("ans is:"+array5(a));
    
}
function array5(n){
var i;
var stringVal ="";
for(i=1;i<=n;i++){
if(i%3==0&&i%5==0)
stringVal="\n"+stringVal+"fizzbuzz";
else if(i%3==0)
stringVal="\n"+stringVal+"fizz" ;  
else if(i%5==0)
stringVal="\n"+stringVal+"buzz" ;  
else
stringVal="\n"+stringVal+i ; 
}
return stringVal;

}


