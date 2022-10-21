let N=6;
let str="mom";

let bag="";
let bag1="";

    for(let i=str.length-1;i>=0; i--){
        bag+=str[i];
    }
    for(let i=0;i<=str.length-1;i++){
        bag1+=str[i];
    }
    if(bag==bag1){
        console.log("Yes");
    }
    else{
        console.log("No");
    }