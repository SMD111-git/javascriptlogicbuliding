function selection(arr,n){
    for(let i=0;i<n-1;i++){
        let mini=i
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[mini]){
                mini=j;
            }
            //sawp the arr elements
        }
        let temp=arr[mini]
            arr[mini]=arr[i]
            arr[i]=temp
      
    }
      console.log(`after sorting`)
      console.log(arr.join(","));
      
}
const arr=[13,60,20,50,4,30,56]
const n=arr.length;
console.log(`before sorting`);
console.log(arr.join(","))
selection(arr,n)
