function nghiem(a,c,b){
var a = document.getElementById('a').value;
var b = document.getElementById('b').value;
var c = document.getElementById('c').value;
var delta = b^2 - 4*a*c;
if((a == 0 && b == 0) || (delta < 0)){
    document.getElementById('ketqua').innerHTML = "Phương trình vô nghiệm";
}
else{
    if(a == 0){
        document.getElementById('ketqua').innerHTML = "Phương trình có một nghiệm là: " + -c/b;
    }
    else{
        document.getElementById('ketqua').innerHTML =
         "Phương trình có hai nghiệm:" 
         + "Nghiệm thứ nhất là: " + (-b + Math.sqrt(delta)) / 2*a 
         + " Nghiệm thứ hai là: " + (-b - Math.sqrt(delta)) / 2*a;
    }
}
}
