function solution(p) {
    function splitBalancedBracket(p){
        if(p.length === 0) return ""
        
        const balancedBracket = []
        const bracketCount = {}
        for(let i = 0; i < p.length; i++){
            const bracket = p[i];
            bracketCount[bracket] = (bracketCount[bracket] ?? 0) + 1;
            if(Math.abs(bracketCount["("] - bracketCount[")"]) === 0){
                balancedBracket.push(p.substring(0, i+1))
                balancedBracket.push(p.substring(i+1))
                break;
            }
        }
        
        const stack = []
        const [u, v] = balancedBracket;
        let isValid = true;
        for (const bracket of u) {
            if(bracket === "("){
                stack.push(bracket);
            } else {
                if(stack.length === 0) isValid = false;
                stack.pop();
            }
        }
        
        if(isValid && stack.length === 0){
            return u + splitBalancedBracket(v);
        } else {
            let answer = ""
            answer += "(" + splitBalancedBracket(v) + ")";
            answer += u.slice(1, -1).replace(/[()]/g, (bracket)=>bracket === "(" ? ")" : "(")
            return answer;
        }
    }
    
    return splitBalancedBracket(p);
}