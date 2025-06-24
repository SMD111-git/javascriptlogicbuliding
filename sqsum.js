const sumsq=(sq)=>{
    let n=0
    for(i=1;i<=sq;i++){
        n=n+i*i
        console.log(n)   
    }
    return n
}
 
console.log(sumsq(5))