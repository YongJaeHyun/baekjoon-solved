function solution(video_len, pos, op_start, op_end, commands) {
    let [opStartMinute, opStartSecond] = op_start.split(":").map(num => parseInt(num));
    let [opEndMinute, opEndSecond] = op_end.split(":").map(num => parseInt(num));
    let [videoMinute, videoSecond] = video_len.split(":").map(num => parseInt(num));
    
    function executeCommand(command){   
        let [minute, second] = pos.split(":").map(num => parseInt(num));
        command === "next" ? second += 10 : second -= 10;
        
        if(second >= 60) {
            minute += 1;
            second -= 60;
        } else if (second < 0) {
            minute -= 1;
            second += 60;
        }
        
        if(minute === videoMinute && second > videoSecond) return video_len
        else if(minute < 0 || (minute === 0 && second < 0)) return "00:00";

        return `${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;
    }
    
    function checkIsOpeningTime() {
        let [minute, second] = pos.split(":").map(num => parseInt(num));
        const isOverOpStart = opStartMinute < minute || opStartMinute === minute && opStartSecond <= second
        const isUnderOpEnd = minute < opEndMinute || minute === opEndMinute && second <= opEndSecond
        
        if(opStartMinute < minute && minute < opEndMinute) return true;
        else if(isOverOpStart && isUnderOpEnd) return true;
        else return false;
    }
    
    for(const command of commands) {
        if(checkIsOpeningTime()){
            pos = op_end;
        }
        
        pos = executeCommand(command);
        
        if(checkIsOpeningTime()){
            pos = op_end;
        }
    }
    
    return pos;
}
    


//     const [leftHour, leftMin] = left.split(":").map(parseInt);
//     const [rightHour, rightMin] = right.split(":").map(parseInt);
    
//     if(leftHour > rightHour) return true;
//     else if(leftHour === rightHour && leftMin > rightMin) return true;