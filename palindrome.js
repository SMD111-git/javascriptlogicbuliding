const palindrome=(n)=>{
    let rev=0;
    let dum=n;
    while(n!==0){
        rev=rev*10+n%10;
        n=Math.floor(n/10)
    }
    if(dum===rev){
        return "it is  a palindrome"
    }
    else{
        return"is not a plaindrome"
    }
}
const n= 121;
console.log(palindrome(n))