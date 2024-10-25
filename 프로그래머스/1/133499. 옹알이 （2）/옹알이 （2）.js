function slice(str, start, end=str.length){
    let sliced = "";
    for(let i = start; i < end; i++){
        sliced += str[i];
    }
    return sliced;
}

function solution(babblings) {
    let answer = 0;
    const possibleBabblings = ["aya", "ye", "woo", "ma"];
    const impossibleBabblings = ["ayaaya", "yeye", "woowoo", "mama"]
    
    for(let babbling of babblings){
        // 유효하지 않은 옹알이가 있을 시, 다음 옹알이로 넘어감
        let isValid = true;
        for(const impossibleBabbling of impossibleBabblings){
            if(babbling.includes(impossibleBabbling)){
                isValid = false;
            }
        }
        if(!isValid) continue;
        
        // 옹알이 제거과정을 거치기 전과 후가 같으면 탈출
        let prevBabbling = "";
        while(prevBabbling !== babbling){
            prevBabbling = babbling;
            for(const possibleBabbling of possibleBabblings){
                const firstBabbling = slice(babbling, 0, possibleBabbling.length)
                if(firstBabbling === possibleBabbling){
                    babbling = babbling.replace(firstBabbling, "");
                }
            }
        }
        
        // 아직 옹알이가 남아있으면 발음할 수 없는 옹알이
        // 즉, 남은 옹알이가 없어야 발음이 가능한 옹알이임.
        if(!babbling) answer++ 
    }

    return answer;
}


