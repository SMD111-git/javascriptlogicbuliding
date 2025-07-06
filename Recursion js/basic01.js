let cnt=0;
const recu=()=>{
    if(cnt==3)
        return;//this return olny when the cnt==3 or else skipped
    console.log(cnt);
    cnt+=1;
    recu() //this functioncall will stop when the condition becomes true ,
    // then the func call will stop then move out of this function scope then move to outter func call
     
}
recu()