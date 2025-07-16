function inseration(arr,n){
    for(let i=0;i<=n-1;i++){
        let j=i;
        while(j>0 && arr[j-1]>arr[j]){
            ///swap
            let temp= arr[j-1]
            arr[j-1]=arr[j]
            arr[j]=temp
            j--
        }

    }
    console.log("after insertionsort" , arr.join(","))
}
const arr=[13,46,24,52,20,9]
const n= arr.length
console.log("before insertionsort", arr.join(","))
inseration(arr,n)