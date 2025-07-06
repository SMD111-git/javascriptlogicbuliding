function a(i,n){
    if(i<1) return;
    console.log(`${i}`);
    a(i-1)
    
}
const n=4;
a(n,n)