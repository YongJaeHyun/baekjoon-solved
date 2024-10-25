// 구현
function solution(expression) {
   let maxNum = -Infinity;
   
   const operatorPriorities = [
       ["*", "+", "-"],
       ["*", "-", "+"],
       ["+", "*", "-"],
       ["+", "-", "*"],
       ["-", "*", "+"],
       ["-", "+", "*"],
   ];
    let numbers = expression.split(/[*+-]/).map(Number);
    let operators = expression.match(/[*+-]/g);
    
    // 모든 우선순위의 경우에서 최댓값을 계산
    for(const operatorPriority of operatorPriorities){
        const newNumbers = [...numbers];
        const newOperators = [...operators];
        
        // 현재 계산할 연산자
        for(const operator of operatorPriority){
            let idx = newOperators.indexOf(operator)
            while(idx !== -1){
                let result;
                switch (operator){
                    case "*":
                        result = newNumbers[idx] * newNumbers[idx+1]
                        break;
                    case "+":
                        result = newNumbers[idx] + newNumbers[idx+1]
                        break;
                    case "-":
                        result = newNumbers[idx] - newNumbers[idx+1]
                        break;
                }
                newNumbers.splice(idx, 2, result);
                newOperators.splice(idx, 1);
                idx = newOperators.indexOf(operator) // 해당 연산자를 사용한 계산이 더 있는지 확인
            }
        }
        
        maxNum = Math.max(maxNum, Math.abs(newNumbers[0]))
    }
    return maxNum;
}
