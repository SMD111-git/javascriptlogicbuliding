const count=(n)=>{
    let cnt= Math.floor(Math.log10(n)+1)
    return cnt;
}
const n= 12345
console.log("N:"+n)
const digitcount=count(n)
console.log("number of digits:",digitcount)