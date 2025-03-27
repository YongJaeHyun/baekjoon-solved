function solution(n, w, num) {
    const allBoxes = Array.from({length: w}, () => []);
    
    for(let i = 0; i < n; i++){
        let idx;
        const isReversed = Math.floor(i / w) % 2 !== 0
        
        if(isReversed){
            idx = (w - 1) - i % w;
        } else {
            idx = i % w;
        }
        allBoxes[idx].push(i + 1);
    }
    
    for(const boxes of allBoxes){
        const targetIdx = boxes.indexOf(num);
        if(targetIdx !== -1) {
            const takeoutBoxesLength = boxes.length - targetIdx
            return takeoutBoxesLength;
        }
    }
    
    return 0;
}