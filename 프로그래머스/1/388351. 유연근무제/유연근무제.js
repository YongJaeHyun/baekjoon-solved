function solution(schedules, timelogs, startday) {
    let answer = 0;
    for(let i = 0; i < schedules.length; i++){
        const schedule = schedules[i];
        let hopeSchedule = schedule + 10;
        let isSuccess = true;
        for(let j = 0; j < 7; j++){
            const day = startday + j;
            if(day % 7 === 6 || day % 7 === 0) continue;
            
            let timelog = timelogs[i][j];
            if(hopeSchedule % 100 >= 60) {
                hopeSchedule += 40 
            }
            
            if(hopeSchedule < timelog){
                isSuccess = false;
                break;
            }
        }
        
        if(isSuccess) answer++
    }
    return answer;
}