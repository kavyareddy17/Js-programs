function showNumber3() {
    var a = document.getElementById("demo").value;
    alert("ans is:" +mul35(a));

}
function mul35(n) {
    if (n == 0 || n < 0)
        return 0;
    else {
        var i;
        var sum = 0;
        for (i = 0; i < n; i++){
            if (i % 3 == 0 || i % 5 == 0) {
                sum = sum + i;
            }
        }
        return sum;
    }

}
