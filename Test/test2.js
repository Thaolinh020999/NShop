var a = 1;
var b = -5;
var c = 4;
var delta = b^2 - 4*a*c;
if((a == 0 && b == 0) || (delta < 0)){
    console.log("Phương trình vô nghiệm.");
}
else{
    if(a == 0){
        console.log("Phương trình có một nghiệm là: " + -c/b);
    }
    else{
        console.log("Phương trình có hai nghiệm:");
        console.log(" Nghiệm thứ nhất là: " + (-b + Math.sqrt(delta)) / 2*a);
        console.log(" Nghiệm thứ hai là: " + (-b - Math.sqrt(delta)) / 2*a);
    }
}

