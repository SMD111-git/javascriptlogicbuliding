const factorail=(n)=>{
    let fact=1
    let i=2
    while(i<=n){
        fact*=i
        i++
        console.log(`${fact}*${i}`)
    }
    return fact



}
console.log(factorail(5))

///
function fac(num){
    let res=1
    let a=num
    for(let i=2;i<=a;i++){
        res=res*i
        console.log(`the facroial of ${a} is ${res}*${i}`)
    }
    return res
    
}
console.log(fac(5))