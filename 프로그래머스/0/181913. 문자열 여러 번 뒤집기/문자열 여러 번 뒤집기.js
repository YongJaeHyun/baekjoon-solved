function solution(my_string, queries) {
    let answer = my_string;
    
    for(const [s, e] of queries) {
        const prefix = answer.slice(0, s);
        const suffix = answer.slice(e + 1);
        const str = answer.slice(s, e+1);
        
        const reversedStr = [...str].reverse().join('');
        answer = prefix + reversedStr + suffix;
    }
    
    return answer;
}