export function strings  (A){
    return A
    
}

export function concatenate(B){
    return B
}

export function templateLiterals(D){
    return D
}
// export default strings; 


export function Arrays(Z){
    const a = Z[0];
    const b = Z[Z.length -1]
    let answer= (`${a} ${b}` )
    return answer
}


export function compareArrays(arr1, arr2){
   
        if (arr1.length > arr2.length) {
            return arr1
        } else {
            return arr2
        }
  

};


export function stringToArrays(hack){
  return hack.split (",", 26);

  };

  export function forLoop(params){
    
let toArr = params.split(","); {
let newArr = []
for (let i = 0; i < toArr.length; i++){

     newArr.push(i);
  }
   return newArr
}
  };

//  export function indexOfAlphabetsArray(params1, params2) {
//     let toArr = params1.split(",");
//     let newArr = []
//     for (let p = 0; p   < toArr.length; p++) {
//         newArr.push(p);
//     }
//   };

export function indexOfAlphabetsArray(j,k) {
    var newArray = j.map((e, i) => e + ", " + k[i]);
    return newArray
}
    

