const abc=[1,2,3,4,5,6,7,8,9,10];
// abc.sort();

for (let i=0;i<abc.length;++i){
    for (let j=0;j<abc.length-1;++j){
        if (abc[j]<abc[j+1]){
let temp=abc[j];
abc[j]=abc[j+1];
abc[j+1]=temp;
        }
    }
     
}

// console.log(abc);

const filtered =abc.filter((number,index)=> {return number%2==0})

// console.log(filtered)

// const arr=abc.map((val,index)=>console.log(val));

abc.push(11);
abc.pop(1);

console.log(abc)

// SPLICE 1 ARG -- INDEX 2ND ARG - HOW MANY ITEMS TO DELETE 3 ARG - WHAT YOU WANT TO ADD 

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(2);