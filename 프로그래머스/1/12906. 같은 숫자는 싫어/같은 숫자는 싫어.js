function solution(arr)
{
    const answer = [];
    let prev;
    
    for(const str of arr) {
        if(prev !== str) {
            answer.push(str);
            prev = str;
        }
    }
    
    return answer;
}