function missingNums(arr){
    let missedNum=arr.length;
    arr.sort((a,b)=>a-b)
    for(let i=0;i<arr.length;i++){
        let sub=arr[i+1]-arr[i]
        if(sub>1){
            for(let j=1;j<sub;j++){
                missedNum=arr[i]+j
            }
        }
    }
    console.log(missedNum)
    return missedNum
}
missingNums([9,6,4,2,3,5,7,0,1])

