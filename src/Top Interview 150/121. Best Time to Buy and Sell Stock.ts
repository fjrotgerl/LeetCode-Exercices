function maxProfit(prices: number[]): number {
    let actuallyProfit: number = 0;
    let actuallyProfitIndex: number = 0;
    prices.forEach((price1, index1) => {
        debugger;
        if (price1 < prices[index1 + 1]) {
            prices.forEach((price2, index2) => {
                if (price1 - price2 > 0 && index1 > index2) {
                    actuallyProfit = price1 - price2;
                    actuallyProfitIndex = index1;
                }
            })
        }
        
    })
    console.log(actuallyProfit, actuallyProfitIndex)
    return 0;
};

// 2
// maxProfit([2,4,1]);

// 5
maxProfit([7,1,5,3,6,4]);