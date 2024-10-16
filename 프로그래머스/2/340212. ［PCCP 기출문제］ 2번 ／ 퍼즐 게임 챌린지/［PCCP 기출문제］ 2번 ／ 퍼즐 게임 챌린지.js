function solution(diffs, times, limit) {
    let level = 50000;
    let leftLevel = 1;
    let rightLevel = 100000;
    
    function getIsLevelExceedLimit(level) {
        let totalTime = 0;
        
        for(let i = 0; i < diffs.length; i++){
            const currentLevel = diffs[i];
            const currentTime = times[i];
            
            if(currentLevel <= level){
                totalTime += currentTime;
            } else {
                const repeatCnt = currentLevel - level;
                const prevTime = times[i-1];
                totalTime += repeatCnt * (prevTime + currentTime) + currentTime;
            }
            
            if(totalTime > limit) return false;
        }
        return true;
    }
    
    while(true){
        const isExceedLimit = getIsLevelExceedLimit(level)
        
        if(isExceedLimit){
            if(rightLevel - leftLevel <= 1) return leftLevel;
            
            rightLevel = level;
            level = Math.floor((leftLevel + rightLevel) / 2)
        } else {
            if(rightLevel - leftLevel <= 1) return rightLevel;
            
            leftLevel = level;
            level = Math.floor((leftLevel + rightLevel) / 2)
        }
    }
    
    return level;
}