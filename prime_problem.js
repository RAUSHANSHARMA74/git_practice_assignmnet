function prime(num)  {
     
    let factor = 0;
    for(let x=1; x<=num; x++){
        if(num % x==0 ){
            factor++
}   

}
    if(factor==2){
       return true;

} 
    return false; 
    
}

let answer = prime(13);
if(answer==true){
    console.log("This is a Prime Number");
} else{
    console.log("This is a not Prime Number");
}
