function makeArray(length, deps = 1){
    const array = [];
    if(deps === 1){
        for(let i = 0; i < length; i++){
            array.push(null)
        }
        return array;
    }
    
    for(let i = 0; i < length; i++){
        array.push(makeArray(length, deps-1));
    }
    return array;
}

function indexOf(array, str){
    let index = -1;
    for(let i = 0; i < array.length; i++){
        if(array[i] === str){
            index = i;
        }
    }
    return index;
}

function findMax(array){
    let maxNum = -Infinity;
    for(let num of array){
        if(num > maxNum){
            maxNum = num;
        }
    }
    return maxNum;
}

function solution(friends, gifts) {
    const giftIndex = makeArray(friends.length);
    const nextGiftCount = makeArray(friends.length);
    
    // 이중 배열 초기화
    const giveAndTakeGraph = makeArray(friends.length, 2);
    
    // 선물 기록을 통해, 선물 지수와 주고받은 선물 그래프에 반영
    for(const gift of gifts){
        const [giveFriendName, receiveFriendName] = gift.split(" ");
        const giveFriendIdx = indexOf(friends, giveFriendName);
        const receiveFriendIdx = indexOf(friends, receiveFriendName);
        
        giftIndex[giveFriendIdx] += 1;
        giftIndex[receiveFriendIdx] -= 1;
        giveAndTakeGraph[giveFriendIdx][receiveFriendIdx] += 1;
    }
    
    // CASE
    // 1. 더 많은 선물을 준 사람이 다음 달에 선물을 하나 받음.
    // 2. 기록이 없거나 선물을 주고받은 수가 같으면, 선물 지수가 큰 사람이 작은 사람에게 선물을 하나 받음.
    // 3. 선물 지수도 같다면, 다음달에 선물을 주고받지 않음
    for(let i = 0; i < giveAndTakeGraph.length; i++){
        for(let j = 0; j < giveAndTakeGraph.length; j++){
            if(i === j) continue; // 본인이 본인한테 선물 준 경우
            
            // CASE 2, 3
            if(giveAndTakeGraph[i][j] === giveAndTakeGraph[j][i]){
                if(giftIndex[i] < giftIndex[j]){
                    nextGiftCount[j] += 1;
                } else if(giftIndex[i] > giftIndex[j]){
                    nextGiftCount[i] += 1;
                }
            }
            // CASE 1 
            else if (giveAndTakeGraph[i][j] > giveAndTakeGraph[j][i]){
                nextGiftCount[i] += 1;
            } else {
                nextGiftCount[j] += 1;
            }
        }
    }
    
    return findMax(nextGiftCount) / 2;
}