
function calculated(){
number_1=
Number(document.getElementById("length").value);

var area= number_1* number_1
var perimetre= 4* number_1

document.getElementById("area").innerHTML= area;
document.getElementById("perimetre").innerHTML= perimetre;
}