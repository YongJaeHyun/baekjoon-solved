function solution(msg) {
    const answer = [];
    const dictionary = [null, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    for(let i = 0; i < msg.length; i++) {
        let prevText = msg[i];
        let newText = prevText + msg[i + 1];
        
        while(dictionary.indexOf(newText) >= 0) {
            prevText = newText;
            newText += msg[++i + 1];
        }
        
        const index = dictionary.indexOf(prevText);
        answer.push(index);
        dictionary.push(newText);
    }
    return answer;
}