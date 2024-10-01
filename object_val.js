let clas = {
    boys: 30,
    girls: 20,
    total: [30, 20],
    marks: {
        st1: "syam",
        rank: 49,
    },
    pincode: 535558
}
let cls2 = {
    gender: "male",
}

// method-1:-

for (i in clas) {
    count = 0
    for (j in cls2 ) {
        if (i === j) {
            count++
        }
    }
    if (count == 0) {
        console.log(i, "is not present");
        clas[j] = cls2[j]
    }
}
console.log(clas)

// Method-2:-

// console.log(Object.keys(clas))
// console.log(Object.keys(clas).includes("boys"))
// let st = { staf: 10 }
// console.log(Object.assign(clas, st))

// method-3:-

// let values = Object.keys(clas);
// console.log(values);
// let x=(Object.keys(clas).includes("boys"))
// if(x==true){
//     console.log("valid")
//     let add={staf:10}
//     console.log(Object.assign(clas,add))
// }
// else{
//     console.log("Not valid")
// }
