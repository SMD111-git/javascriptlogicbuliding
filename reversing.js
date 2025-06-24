const reversinggear=(n)=>{
    let rev=0
    while(n!==0){
        rev=rev*10+n%10
        n=Math.floor(n/10) /// this get remove the last digit from series
    }
    return rev
}
const number= 12345;
console.log(reversinggear(number))

 
const stringrevers=(str)=>{
    let char='';
    let i= str.length-1
    while(i>=0){
    char=char+str[i]
    i--
    }
    return char
}
const string= "hello"
console.log(stringrevers(string))