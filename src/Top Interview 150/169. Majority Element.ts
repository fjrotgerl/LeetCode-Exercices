function majorityElement(nums: number[]): number {
    let hashMap: Map<number, number> = new Map();

    nums.forEach(item => {
        const valueToCheck = hashMap.get(item);
        if (!valueToCheck) {
            hashMap.set(item, 1);
        } else {
            hashMap.set(item, (valueToCheck + 1));
        }
    })

    let maxValue = 0;
    let maxKey = 0;

    hashMap.forEach((value, key) => {
        if (value > maxValue) {
            maxValue = value;
            maxKey = key;
        }
    })
    return maxKey;
};

majorityElement([3,3,2,5,5,5,5,5,4]);