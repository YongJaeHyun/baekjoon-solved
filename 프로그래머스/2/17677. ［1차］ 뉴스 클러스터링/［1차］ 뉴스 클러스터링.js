function solution(str1, str2) {
    const arr1 = {};
    const arr2 = {};
    
    for(let i = 0; i < str1.length - 1; i++) {
        const str = (str1[i] + str1[i + 1]).toLowerCase();
        const isValid = /[a-z]{2}/.test(str);
        if(isValid) arr1[str] = (arr1[str] || 0) + 1;
    }
    for(let j = 0; j < str2.length - 1; j++) {
        const str = (str2[j] + str2[j + 1]).toLowerCase();
        const isValid = /[a-z]{2}/.test(str);
        if(isValid) arr2[str] = (arr2[str] || 0) + 1;
    }
    
    const a = Object.values(arr1);
    const b = Object.values(arr2);
    
    if(!a.length && !b.length) return 65536;
    if(!a.length || !b.length) return 0;
    
    const aSum = a.reduce((acc, cur) => acc + cur);
    const bSum = b.reduce((acc, cur) => acc + cur);
    
    let intersectionCount = 0;
    for(const str of Object.keys(arr1)) {
        if(arr2[str]) {
            intersectionCount += Math.min(arr1[str], arr2[str]);
        }
    }
    
    const unionCount = aSum + bSum - intersectionCount;
    return Math.floor(intersectionCount / unionCount * 65536);
}