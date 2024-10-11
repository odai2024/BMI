function calculatebmi(){
    debugger;
var a=document.getElementById("ca").value;
var b=document.getElementById("lc").value;
var c= b / a ** 2;
document.getElementById("at").innerHTML=c.toFixed(2);
}