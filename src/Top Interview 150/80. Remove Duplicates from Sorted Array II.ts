function removeDuplicates3(nums: number[]): number {
    let itFirstNumber = true;
    
    for(let i = 0; i < nums.length; i++) {
        if (!itFirstNumber) {
            while (nums[i] === nums[i + 1]) {
                nums.splice(i, 1);
            }
            itFirstNumber = true;
        } if (nums[i] === nums[i + 1]) {
            itFirstNumber = false;
        }
    }

    return nums.length;
};