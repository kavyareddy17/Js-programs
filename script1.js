function  factorial(n){
    
        if(n==0)
            return 1;
            else{
        var fact;
        fact=n*factorial(n-1);
        return fact;
    }}
    function showNumber()
    {  
        var a=document.getElementById("demo").value;
        alert("factorial is:"+factorial(a));
        
    }
    