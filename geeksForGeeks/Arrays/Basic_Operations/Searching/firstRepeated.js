class Solution {
    // Function to return the position of the first repeating element.
    firstRepeated(arr, n) {
        // your code here
        let foundValues = new Set();
         let min = -1;
        for(let i = n-1;i>=0;i--){
            if(foundValues.has(arr[i])){
                min = i;
            }else{
                foundValues.add(arr[i]);
            }
        }
        
        if(min !== -1) return min+1;
        return min;
    }
}

const obj = new Solution();
console.log(obj.firstRepeated([1, 5, 3, 4, 3, 5, 6],7));