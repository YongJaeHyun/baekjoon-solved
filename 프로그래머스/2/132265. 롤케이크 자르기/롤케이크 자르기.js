function solution(toppings) {
    let answer = 0;
    const left = {};
    const right = {};
    
    let leftKinds = 0;
    let rightKinds = 0;
    toppings.forEach((t) => {
        if(!right[t]) {
            right[t] = 1;
            rightKinds++;
        } else {
            right[t]++;
        }
    })
    
    for(const topping of toppings) {
        if(!left[topping]) {
            left[topping] = 1;
            leftKinds++;
        } else {
            left[topping]++;
        }
        
        right[topping] -= 1;
        if(!right[topping]) {
            delete right[topping];
            rightKinds--;
        }
        if(leftKinds === rightKinds) answer++;
    }
    return answer;
}