//Bai 1:
// function filterOutFemales(members){
//     var members = [
//         { name: 'Lan', gender: 'female' },
//         { name: 'Linh', gender: 'female' },
//         { name: 'Trung', gender: 'male' },
//         { name: 'Peter', gender: 'gay' },
//         ]
//     var member=members.filter((value) => {
//         return value.gender != 'female';
//     });
//     return member;
// }
// console.log(filterOutFemales());


//Bai2:
// function multiply(numbers){
//     var numbers = [10,5,8];
//     var output = numbers.map(Element => tripple(Element));
//     return output;
// }
// function tripple(n){
//     var n;
//     return n*3;
// }
// console.log(multiply());

//Bai3:
function totalVotes(voters){
    var voters = [
        {name:'Bob' , age: 30, voted: true},
        {name:'Jake' , age: 32, voted: true},
        {name:'Kate' , age: 25, voted: false},
        {name:'Sam' , age: 20, voted: false},
        {name:'Phil' , age: 21, voted: true},
        {name:'Ed' , age:55, voted:true},
        {name:'Tami' , age: 54, voted:true},
        {name: 'Mary', age: 31, voted: false},
        {name: 'Becky', age: 43, voted: false},
        {name: 'Joey', age: 41, voted: true},
        {name: 'Jeff', age: 30, voted: true},
        {name: 'Zack', age: 19, voted: false}
    ];
    var sum=voters.reduce((sum,value) => { 
        if(value.voted === true){
          sum++;
        }
        return sum;
    },0)
    return sum;
}
console.log(totalVotes());


//Bai4:
// function shoppingSpree(wishlist){
//     var wishlist = [
//         { title: "Tesla Model S", price: 90000 },
//         { title: "4 carat diamond ring", price: 45000 },
//         { title: "Fancy hacky Sack", price: 5 },
//         { title: "Gold fidgit spinner", price: 2000 },
//         { title: "A second Tesla Model S", price: 90000 }
//       ];
//     var s=wishlist.reduce((s,value) => s+=value.price,0)
//     return s;
// }
// console.log(shoppingSpree());
