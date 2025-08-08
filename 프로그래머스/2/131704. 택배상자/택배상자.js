function solution(order) {
    let answer = 0;
    const stack = [];
    let index = 0;
    
    for(let box = 1; box <= order.length; box++) {
        if(order[index] === box) {
            index++;
            answer++;
        } else {
            stack.push(box)
        }
        
        while(stack.length > 0) {
            const stackBox = stack.pop();
            if(order[index] === stackBox) {
                index++;
                answer++;
            } else {
                stack.push(stackBox);
                break;
            }
        }
    } 
    return answer;
}