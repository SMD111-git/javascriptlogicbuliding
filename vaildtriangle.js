function vaild(a,b,c){
    if(a+b<=c||b+c<=a||a+c<=b)
        return "is not vaild traiangle"
    else
    return "is vaild triangle"
}
const a=1, b=10, c=12;
console.log(vaild(a,b,c))