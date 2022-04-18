function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = principal * (rate/100) * years;
    if (principal < 1) {
        alert("Enter a positive number.");
        document.getElementById("principal").focus();
    }else{
    document.getElementById("result").innerHTML= "<br> <br> If you deposit " + principal + ", <br> at an interest rate of " + rate + " <br> You will receive an amount of " + amount  +",<br>in the year <span class=\"resul\t">"+year+" </span>\<br\>" ;
    }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        
