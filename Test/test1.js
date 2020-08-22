function maxNumber(a,b,c){
var a = document.getElementById('a').value;
var b = document.getElementById('b').value;
var c = document.getElementById('c').value;
var arr = [a,b,c];
var max = arr[0];
for(var i = 1; i<arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
};
document.getElementById('ketqua').innerHTML = "Số lớn nhất là: " + max;
}
