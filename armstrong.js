function arm(num){
    let k= String(num).length;
    let sum=0;
    let n=num;
    while(n!==0){
        let last=n%10;
        sum=sum+Math.pow(last,k)
        n=Math.floor(n/10);
        return `${n}:${sum}`
    }
    if(sum===num)
        return 'given number is arm strong'
}
const num=153;
console.log(arm(num))