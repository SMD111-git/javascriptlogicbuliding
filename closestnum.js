const closest=(n,m)=>{
    let q= parseInt(n/m)
    let n1=m*q
    let n2=n*m>0?(m*(q+1)):(m*(q-1))
    if(Math.abs(n-n1)<Math.abs(n-n2))
        return n1
    else
    return n2
}
const n=13
const m=4
console.log(closest(n,m))