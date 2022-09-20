
function prime(num){
    let number = 0;
    for(let x=0; x<num; x++){
        if(num % x == 0){
            number++
        }
    }
    if(number == 2){
        return true
    }
    return false
let answer = prime(13);
if(answer==true){
    console.log("This is a Prime Number");
} else{
    console.log("This is a not Prime Number");
}
