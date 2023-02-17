//Time complexity: O(N)
//Auxiliary Space: O(1)
class Solution {
    search(arr, n, k) {
        // code here
        for(let i =0;i<=n-1;i++){
            if(arr[i] === k) return i+1;
        }
        return -1;
    }
}

const obj = new Solution();
console.log(obj.search([1,2,3,4,5],5,3));