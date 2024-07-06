//Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.
//You want to maximize your profit by choosing a single day to buy one stock and 
//choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. 
//If you cannot achieve any profit, return 0


function buySellShares(array) {

    // let maxProfit = 0;
    // let tempProfit = 0;
    
    //1.Brute force
    // for (let i = 0; i < array.length; i++) {        
    //    for (let j = i+1; j <= array.length-1; j++) {
    //         tempProfit = array[j] - array[i];
    //         if(tempProfit > maxProfit){
    //             maxProfit = tempProfit;
    //         }        
    //    }        
    // }

    //2.Better Approach    
    // let i =0;
    // let j = 1;

    // while(i< array.length && j< array.length) {
    //     console.log("Buy element is ",array[i]);
    //     console.log("Sell element is ",array[j]);
    //     if(array[i] <= array[j]){
    //         tempProfit = array[j]-array[i];
    //         if(maxProfit < tempProfit){
    //             maxProfit = tempProfit;
    //         }
    //         j++;
    //     } else{
    //         i++;            
    //     }
    // }

    //3.Parallel approach
    let maxProfit = 0;
    let minBuyPrice = Number.MAX_SAFE_INTEGER;

    for(let i=0;i < array.length;i++){
        //Always set the min price and go to next buy price
        if(array[i] < minBuyPrice){
            minBuyPrice = array[i];
        } 
        //If price is NOT the minimum, compare the prices to get profit 
        else {
            let diff = array[i] - minBuyPrice;
            maxProfit = Math.max(maxProfit,diff);
        }
    }


    return maxProfit;
}

prices = [2,1]
console.log(buySellShares(prices));