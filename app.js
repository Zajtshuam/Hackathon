import {concatenate, strings, templateLiterals, Arrays, compareArrays, 
    stringToArrays, 
    forLoop, 
    indexOfAlphabetsArray} from "./src/strings.js";


document.title = "Hackathon"


let div = document.createElement("div1");
div.innerHTML = "<h1 id = mainHeading> Cycle 10 Hackathon</h1>"

document.body.prepend(div)  
div.setAttribute("id", "div1")
div.style.color = "grey";
div.style.textAlign = "center";
div.style.border = "dotted thick";


{/* <button style = "width: 20%; height: 50%;">Picture</button> */}
let btn = document.createElement("button");
btn.innerHTML = "Picture";
document.body.appendChild(btn);
btn.style.position = "absolute";
btn.style.left = "48%";




console.log(strings("I am calling this function and passing this text as an argument."));
 
console.log(concatenate("I am calling this function and passing this text as an argument. I have concatenated this string to the prior sentence."));

console.log(templateLiterals("I am calling this function and passing this text as an argument. I have concatenated this string to the prior sentence."));

console.log(Arrays([1,2,3,4]))

console.log(compareArrays([1,2,3,4], [1,2,3,4,5]))

// let test = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
//     console.log(test)
    

console.log(stringToArrays("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"));

console.log("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z");

console.log(forLoop("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"));

console.log(indexOfAlphabetsArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]));

