/*function sumofdigits(D){
    const n= D.toString();
    let sum=0;
    for(let i of n){
        sum+=parseInt(i);
        console.log(`${i} :${sum}`)
    }
    return sum
    

}
const d=1234;
console.log(sumofdigits(d))
*/
//other approcha 
const sumofdigits=(n)=>{
    //we can add while loop to check the given number is n==0 or else not
    let sum=0;
    while(n!==0){
    let a=n%10 // this get you the last digit from series or input
    sum= sum+a
    //now removin the last digit from series after it add 
    n=Math.floor(n/10);
    }
    return sum

}
const n=786;
console.log(sumofdigits(n))