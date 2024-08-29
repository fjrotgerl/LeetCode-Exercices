/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    console.log("aa")

    nums2.forEach(n2 => {
        nums1.some((n1, index) => {
            if (n1 === 0) {
                nums1[index] = n2;
                return true;
            }
        })
    });

    nums1.sort((a, b) => a - b);
};

