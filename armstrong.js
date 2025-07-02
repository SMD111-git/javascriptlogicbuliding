function arm(num){
    let k= String(num).length;
    let sum=0;
    let n=num;
    while(n!==0){
        let last=n%10;//get the last digit
        sum=sum+Math.pow(last,k)//this does something like this (0+3^3),(27+5^3),() 
        n=Math.floor(n/10);
        return `${n}:${sum}`
    }
    if(sum===num){
        return true
    }
    else{
        return false
    }
    /** return sum === num ? true : false; */
}
const num=153;
console.log(arm(num))
if(arm(num)){
    console.log('true');
    
}
else{
    console.log('false');
    
}
/**if (isArmstrong(number)) {
        console.log(number + " is an Armstrong number.");
    } else {
        console.log(number + " is not an Armstrong number.");
    } */