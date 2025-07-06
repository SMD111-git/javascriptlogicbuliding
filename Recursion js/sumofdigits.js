function sumup(n){
        let sum=0;
        for(let i=1;i<n;i++){
            sum=sum+i
            console.log(`${i}`)
        }
        return sum
}
const n=5;
console.log(sumup(n))