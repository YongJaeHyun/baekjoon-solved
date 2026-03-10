function solution(enrolls, referrals, sellers, amounts) {
    const profitOfEnrolls = Array(enrolls.length).fill(0);
    const sellerToIndex = {}
    
    for(let i = 0; i < enrolls.length; i++) {
        sellerToIndex[enrolls[i]] = i
    }
    
    for(let i = 0; i < sellers.length; i++) {
        let seller = sellers[i]
        let profit = amounts[i] * 100
        let referral = referrals[sellerToIndex[seller]]
        
        while(profit > 0) {
            const givenProfit = Math.floor(profit / 10)
            profitOfEnrolls[sellerToIndex[seller]] += profit - givenProfit
            
            if(referral === "-") break;
            
            seller = referral;
            referral = referrals[sellerToIndex[seller]]
            profit = givenProfit
        }
    }
    
    return profitOfEnrolls;
}