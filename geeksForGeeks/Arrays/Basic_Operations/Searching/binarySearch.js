// Time Complexity: O(log n)
// Auxiliary Space: O(log n)
class Solution {
    binarySearchUtil(arr,low,high,k){
        if(high < low) return -1;
        let mid = Math.floor((low+high)/2);
        //let mid = Math.floor(low + (high-low)/2);
        if(arr[mid] === k) return mid;
        if(arr[mid] < k) return this.binarySearchUtil(arr,mid+1,high,k);
        return this.binarySearchUtil(arr,0,mid-1,k);
    }
    binarysearch(arr, n, k) {
        // code here
        return this.binarySearchUtil(arr,0,n-1,k);
    }
}

const obj = new Solution();
console.log(obj.binarysearch([10, 20, 30, 50, 60, 80, 110, 130, 140, 170], 10, 110))
console.log(obj.binarysearch([10, 20, 30, 50, 60, 80, 110, 130, 140, 170], 10, 175))