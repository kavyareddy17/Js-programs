function calculation(n){
    if(n==0)
    return 0;
    else{
    var i;
    var sum=0;
    for(i=0;i<=n;i++){
        sum=sum+i;
    }
    return sum;
    }
    }
    function showNumber2()
    {  
        var a=document.getElementById("demo").value;
        alert("a" +a);
        alert("sum is:"+calculation(a));
        
    }