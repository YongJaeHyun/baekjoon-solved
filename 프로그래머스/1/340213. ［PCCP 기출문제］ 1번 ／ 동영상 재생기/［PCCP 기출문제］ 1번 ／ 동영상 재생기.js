// 시뮬레이션

function solution(video_len, pos, op_start, op_end, commands) {
    let [opStartMinute, opStartSecond] = op_start.split(":").map(num => parseInt(num));
    let [opEndMinute, opEndSecond] = op_end.split(":").map(num => parseInt(num));
    let [videoMinute, videoSecond] = video_len.split(":").map(num => parseInt(num));
    
    function executeCommand(command){   
        let [minute, second] = pos.split(":").map(num => parseInt(num));
       
        command === "next" ? second += 10 : second -= 10;
        if(second >= 60) {
            minute++;
            second -= 60;
        } else if (second < 0) {
            minute--
            second += 60;
        }
        
        if(minute === videoMinute && second > videoSecond) return video_len
        else if(minute < 0 || (minute === 0 && second < 0)) return "00:00";
        
        const parsedMinute = minute < 10 ? `0${minute}` : minute;
        const parsedSecond = second < 10 ? `0${second}` : second;
        return `${parsedMinute}:${parsedSecond}`;
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