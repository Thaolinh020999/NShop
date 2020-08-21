var a = 20;
var b = 5;
var c = 17;
var arr = [a,b,c];

console.log(arr.sort(function(a,b){
    return a-b;
}));
