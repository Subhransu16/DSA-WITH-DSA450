/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    kthSmallest(arr, k) {
        // Code here
        arr.sort((a,b) => a-b);
        return arr[k - 1]
    }
}