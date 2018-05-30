function showNumber4()
{  
    var a=document.getElementById("demo").value;
    alert("ans is:"+modu(a));
    
}
function  modu(n){
    var counter=0;
    var itr=1;
    while(true){
        itr=2*itr;
        counter++;
        if(itr>n){
            break;
        }
    }
    var itr2=itr/2;
    if(Math.abs(itr-n)>Math.abs(itr2-n)){
        return counter-1;
    }
    else{
        return counter;
    }
}