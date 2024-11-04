function solution(n, arr1, arr2) {
    const answer = arr1.map((value, idx)=> {
        const bin = (value | arr2[idx]).toString(2);
        const decodedMap = bin.padStart(n, "0").replace(/[01]/g, (n)=> +n ? '#' : ' ');
        return [...decodedMap].join('');
    })
    return answer
}