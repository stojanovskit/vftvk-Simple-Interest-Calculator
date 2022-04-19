function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal.value * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    
    var amount = principal.value * (rate/100) * years;
    if (principal.value < 1) {
        alert("Enter a positive number.");
        principal.focus();
        return false;
        
        
    }
    else{
    document.getElementById("result").innerHTML= "<span class=\"wh\"> <br> If you deposit </span>" + principal.value + "<span class=\"wh\">, <br> at an interest rate of </span>" + rate + "<span class=\"wh\"> <br> You will receive an amount of </span>" + amount  +"<span class=\"wh\">,<br>in the year </span>" + year + "\<br\>" ;
    }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}