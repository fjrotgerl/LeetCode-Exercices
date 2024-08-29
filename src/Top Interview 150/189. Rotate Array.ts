/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
   while (k > 0) {
       const lastNumber = nums.pop();
       if (lastNumber || lastNumber === 0) {
           nums.unshift(lastNumber);
       }
       k--;
   }
};
// Output: [3,99,-1,-100]
rotate([-1,-100,3,99], 2);