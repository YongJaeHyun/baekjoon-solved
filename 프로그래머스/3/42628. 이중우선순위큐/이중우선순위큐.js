function solution(operations) {
    let queue = []
    for(const operation of operations){
        const [oper, num] = operation.split(' ')
        switch(oper){
            case 'I': 
                queue.push(+num)
                break;
            case 'D': 
                if(num === '1'){
                    const maxNumIdx = queue.indexOf(Math.max(...queue))
                    queue.splice(maxNumIdx, 1)
                    break;
                } else {
                    const minNumIdx = queue.indexOf(Math.min(...queue))
                    queue.splice(minNumIdx, 1)
                    break;
                }
        }
    }
    return queue.length ? [Math.max(...queue), Math.min(...queue)] : [0, 0];
}