class Solution{
    MissingNumber(array,n){
        //code here
        const sum = (n*(n+1))/2;
        const arrSum = array.reduce((acc, curr) =>{
            acc = acc + curr;
            return acc;
        },0)
        return sum - arrSum;
    }
}
const obj = new Solution();
console.log(obj.MissingNumber([1,2,3,5],5));