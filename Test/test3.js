var n = 10;
var SNT = true;
if(n<1){
    SNT = false;
}
else if(n == 2){
    SNT = false;
}
else if(n%2 == 0){
    SNT = false;
}
else{
    for(let i=3; i<n; i+=2){
        if(n%i == 0){
            return false;
        }
    }
}
if(SNT == true){
    console.log("So " + n + " la so nguyen to!");
}
else{
    console.log("So " + n + " khong phai la so nguyen to!");
}




