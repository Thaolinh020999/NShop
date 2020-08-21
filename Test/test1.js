var a = 20;
var b = 5;
var c = 50;
var arr = [a,b,c];
var max = arr[0];
for(var i = 1; i<arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
};
console.log(max);
