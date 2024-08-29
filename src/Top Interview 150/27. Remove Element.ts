function removeElement(nums: number[], val: number): number {
    nums.forEach((item, index) => {
        if (item == val) {
            if (nums[index + 1] !== val) {
                nums.splice(index, 1);
            } else {
                let aux = 1;
                while (nums[index + aux] === val) {
                    aux++;
                }
                nums.splice(index, aux--);
            }
        }
    })
    return nums.length
};