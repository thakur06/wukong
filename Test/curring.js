"It is the advanced way to work with the functions "

function add(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}

let ans =add(3)(5)(8);

// console.log(ans)




function init(a){
    return function (b){
         if (b){
            return init(b+a);
         }else {
return a;
         }
        }
    }
    
    let res =init(3)(5)(8)(12)(3)(9)(5)(4)();
console.log(res)