// 구현 (시뮬레이션)
function solution(record) {
    const answer = [];
    const map = new Map();
    const history = []
    
    for(const message of record ){
        const [command, uid, nickname] = message.split(" ");
        switch(command){
            case "Enter":
                map.set(uid, nickname);
                history.push([uid, command]);
                break;
            case "Leave":
                history.push([uid, command]);
                break;
            case "Change":
                map.set(uid, nickname);
                break;
        }    
    }
    
    for(const [uid, command] of history) {
        const nickname = map.get(uid);
        
        switch(command){
            case "Enter":
                answer.push(`${nickname}님이 들어왔습니다.`);
                break;
            case "Leave":
                answer.push(`${nickname}님이 나갔습니다.`);
                break;
        }
    }
    return answer;
}