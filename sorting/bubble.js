function bubble(arr,n){
    for(let i=n-1;i>=0;i--){
        for(let j=0;j<=i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j+1]
                arr[j+1]=arr[j]
                arr[j]=temp
            }
        }
    }
    console.log("after sorting",arr.join(","))

}
const arr=[13,46,24,54,20,9]
const n=arr.length
console.log("before sorting",arr.join(","))
bubble(arr,n)