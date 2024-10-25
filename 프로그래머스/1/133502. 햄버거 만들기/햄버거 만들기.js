function slice(array, start, end=array.length){
    let sliced = [];
    if(start < 0) start = array.length + start;
    if(end < 0) end = array.length + end;
    
    for(let i = start; i < end; i++){
        sliced.push(array[i]);
    }
    return sliced;
}

function solution(ingredient) {
    let answer = 0;
    let stack = []
    for(let i = 0; i < ingredient.length; i++){
        stack.push(ingredient[i])
        if(stack.length < 4) continue;
        
        const currentIngredient = slice(stack, -4).join('')
        if(currentIngredient === '1231'){
            stack.length -= 4; // 배열 마지막 4개 요소 삭제
            answer++
        }
    }
    return answer;
}