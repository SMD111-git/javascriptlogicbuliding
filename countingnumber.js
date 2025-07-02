const count=(n)=>{
    let cnt= Math.floor(Math.log10(n)+1)
    return cnt;
}
const n= 12345
console.log("N:"+n)
const digitcount=count(n)
console.log("number of digits:",digitcount)
///approcha two
/**function count(n){
    let cnt=0
    while(n!==0){
        n=Math.floor(n/10)
        cnt++
    }
    return cnt++

}
let n= 123
console.log(count(n))
 */