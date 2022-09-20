function prime(num){
    let count = 0;
    for(let x=0; x<num; x++){
        if(num[x] % x ){
            count++
        }
        return true
    }
    return false

}
if(count==2){
    console.log('prime');

}else{
    console.log('NA');
}
