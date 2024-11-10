function solution(s) {
    const answer = [];
    let visited = '';
    for(let i = 0; i < s.length; i++){
        const currentChar = s[i];
        if(!visited.includes(currentChar)) answer.push(-1);
        else answer.push(i - visited.lastIndexOf(currentChar));
        visited += currentChar;
    }
    return answer;
}