function solution(answers) {
    const answer = []
    const std1 = [1, 2, 3, 4, 5]
    const std2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const std3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    const counts = [0, 0, 0]
    
    for(let i = 0; i < answers.length; i++){
        const ans = answers[i]
        const std1Ans = std1[i % std1.length];
        const std2Ans = std2[i % std2.length];
        const std3Ans = std3[i % std3.length];
        
        if(std1Ans === ans) counts[0]++
        if(std2Ans === ans) counts[1]++
        if(std3Ans === ans) counts[2]++
    }
    
    const maxCount = Math.max(...counts);
    for(let j = 0; j < 3; j++){
        if(counts[j] === maxCount) answer.push(j+1)
    }
    return answer
}