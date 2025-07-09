function solution(storey) {
    let answer = 0;
    const storeyArray = String(storey).padStart(10, '0').split("").map(Number); // 앞에 여유 공간
    const len = storeyArray.length;

    for(let i = len - 1; i > 0; i--) {
        const num = storeyArray[i];

        if(num > 5) {
            storeyArray[i - 1]++;
            answer += 10 - num;
        } else if(num < 5) {
            answer += num;
        } else {
            if(storeyArray[i - 1] >= 5) {
                storeyArray[i - 1]++;
                answer += 5;
            } else {
                answer += 5;
            }
        }
    }

    answer += storeyArray[0];
    return answer;
}
