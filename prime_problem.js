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
}

let ans = prime(13);
if(ans == true){
    console.log('prime');
}else{
    console.log('NA');
}
