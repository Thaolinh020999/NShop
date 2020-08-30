var arr=[0,1,2,3,4,5];
var arr1=[];
var sum=0;
//map
// arr1 = arr.map((value,index,arr) => {
//     return value;
// })
// console.log(arr1);

//filer
// arr1 = arr.filter((value,index,arr) => {
//     return value > 1;
// })
// console.log(arr1);


//reduce
sum = arr.reduce((sum,value,index,arr) => {
    return sum+=value;
})
console.log(sum);
