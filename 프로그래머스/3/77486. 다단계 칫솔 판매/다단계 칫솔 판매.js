function solution(enroll, referral, seller, amount) {
    const n = enroll.length;
    
    const nameToIndex = new Map();
    for (let i = 0; i < n; i++) {
        nameToIndex.set(enroll[i], i);
    }
    
    const profits = Array(n).fill(0);
    
    for (let i = 0; i < seller.length; i++) {
        let current = nameToIndex.get(seller[i]);
        let profit = amount[i] * 100;
        
        while (current !== -1 && profit > 0) {
            const give = Math.floor(profit / 10);
            profits[current] += profit - give;
            
            profit = give;
            const parent = referral[current];
            current = parent === "-" ? -1 : nameToIndex.get(parent);
        }
    }
    
    return profits;
}