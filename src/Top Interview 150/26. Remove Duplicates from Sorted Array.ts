function removeDuplicates(nums: number[]): number {

    let j: number = 0;

    for (let i = 0; i < nums.length; i++) {
        j = 0;
        for (let x = 0; x < nums.length; x++) {
            if (nums[i] === nums[x] && i !== x) {
                j++;
            } if (nums[i] === nums[x] && nums[i] !== nums[x + 1] && x + 1 < nums.length) break;
        }
        nums.splice(i, j);
    }

    return j;
};

function removeDuplicates2(nums: number[]): number {

    let tmpNumbers = [...new Set(nums)];
    nums.length = 0;
    nums.push(...tmpNumbers);
    return nums.length;
};