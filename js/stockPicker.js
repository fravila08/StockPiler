exports.picker = function(prices) {
    let possiblePairs=[]
    let valuedPair=[0,0]
    for (i=0; i<prices.length; i++){
        // console.log(prices[i])
        for (n=i+1; n<prices.length;n++){
            if(prices[i]<prices[n]){
                possiblePairs.push([prices[i],prices[n]])
            }
        }
    }
//    console.log(possiblePairs)
    for (j=0;j<possiblePairs.length; j++){
        evaluator=[possiblePairs[j], (possiblePairs[j][1]-possiblePairs[j][0])]
        // console.log(evaluator)
        if (valuedPair[1]< evaluator[1]){
            valuedPair=evaluator
        }
    }
    return [prices.indexOf(valuedPair[0][0]), prices.indexOf(valuedPair[0][1])]
}
// picker([17,3,6,9,15,8,6,1,10])