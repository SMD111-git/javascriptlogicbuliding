function gcd(n,m){
    while(n>0 && m>0){
        if(n>m){
            n=n%m
        }
        else{
            m=m%n
        }
        if(n==0){
            return m
        }
        return n
    }
}
console.log(gcd(20,15))