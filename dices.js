const MediaDevices=(n)=>{
    n=Number(n)
    if(n===1){
        return 6;
    }else if (n===2) {
        return 5;
    } else if (n===3) {
        return 4
    } else{
        return 1
    }
    


}
let n = 2;
console.log(MediaDevices(n))