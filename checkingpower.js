const power=(x,y)=>{
    if(x==1)
        return y==1;
    console.log(`${x}:${y}`)
    let pow=1;
    while (pow<y) {
        pow=pow*x
        console.log(`${pow}<:${y}`)
    }
    return pow===y;
   // console.log(`${pow}:${y}`)
}
const x=10
const y=1000
console.log(power(x,y))