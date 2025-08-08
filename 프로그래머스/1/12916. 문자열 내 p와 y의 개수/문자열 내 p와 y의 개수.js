function solution(s){
    let pNum = 0, yNum = 0;

    for(const char of s) {
        if(char === "p" || char === "P") pNum++;
        if(char === "y" || char === "Y") yNum++;
    }
    
    return pNum === yNum
}