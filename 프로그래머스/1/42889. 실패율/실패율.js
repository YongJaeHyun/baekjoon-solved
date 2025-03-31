function solution(N, stages) {
    const answer = [];
    for(let i = 1; i <= N; i++){
        let total = 0;
        let notClear = 0;
        stages.forEach((stage)=>{
            if(stage >= i) total++
            if(stage === i) notClear++
        })
        answer.push([i, notClear/total]);
    }
    answer.sort((a, b) => b[1] - a[1])
    return answer.map((arr) => arr[0]);
}