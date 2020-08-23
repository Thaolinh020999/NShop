
    //cách 1:
    // var n = 4;
    // var s=0;
    // for(let i=0; i<=n; i+=2){
    //     s+=i;
    // }
    //  console.log("Tổng của các số chẵn từ 0 đến " + n + " là: " + s);


    //cách 2:
    var n = 8;
    var s = 0;
    var i = 0
    while(i<=n){
        if(i%2 == 0){
            s+=i;
        }
        i++;
    }
    console.log("Tổng của các số chẵn từ 0 đến " + n + " là: " + s);


