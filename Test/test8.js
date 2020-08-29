var arr=[1,1,2,2,3,4,5,3];
for(var i=0; i<arr.length; i++){
    let x = arr.indexOf(arr[i]);
    let y = arr.lastIndexOf(arr[i]);
    if(x!=y){
       arr.splice(x,1);
    }
}
console.log(arr);