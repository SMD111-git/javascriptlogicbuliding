/*const n=5;
if(n==0){
    console.log("the number is 0");
    
}
else{
    const fab=new Array(n+1);
    fab[0]=0;
    fab[1]=1;
    for(let i=2;i<=n;i++){
        fab[i]=fab[i-1]+fab[i-2] //add perv two digits like (1+2=3)(2+3=5)(5+3=8)
    }
    for(let i=0;i<=n ; i++)
        console.log(`${fab[i]}`);
    console.log();
    
}*/
//
function fab(n){
    if(n==0)
        console.log("this a no fab number");
    const fa= new Array(n+1); //giving space to 0 number
    fa[0]=0;
    fa[1]=1;
    for(let i=2;i<=n;i++){
        fa[i]=fa[i-1]+fa[i-2]
    }
    for(let i=0;i<=n;i++){
        console.log(`${fa[i]}`);
        
    }
     
        
}
console.log(fab(5));

