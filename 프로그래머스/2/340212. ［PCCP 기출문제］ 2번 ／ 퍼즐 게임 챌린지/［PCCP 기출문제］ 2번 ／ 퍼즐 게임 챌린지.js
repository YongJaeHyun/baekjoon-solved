// 이분 탐색 기법 활용

function solution(diffs, times, limit) {
    let level = 50000;
    let leftLevel = 1;
    let rightLevel = 100000;
    
    // 해당 숙련도로 limit이 넘는지 확인
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
            
            if(totalTime > limit) return true;
        }
        return false;
    }
    
    while(true){
        const isExceedLimit = getIsLevelExceedLimit(level)
        
        // limit을 넘을 경우, 현재 숙련도(level)가 부족하다는 것이므로, 중앙 기준 왼쪽 범위를 무시
        if(isExceedLimit){
            if(rightLevel - leftLevel <= 1) return rightLevel;
            
            leftLevel = level;
            level = Math.floor((leftLevel + rightLevel) / 2)
        }
        // 넘지 않을 경우, 중앙 기준 오른쪽 범위를 무시
        else {
            if(rightLevel - leftLevel <= 1) return level;
            
            rightLevel = level;
            level = Math.floor((leftLevel + rightLevel) / 2)
        }
    }
    
    return level;
}