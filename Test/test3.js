function songuyento(n){
var n = document.getElementById('n').value;
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
    document.getElementById('check').innerHTML = "Số " + n + " là số nguyên tố";
}
else{
    document.getElementById('check').innerHTML = "Số " + n + " không phải là số nguyên tố";
}
}



