function solution(n, works) {
    works.sort((a, b) => b - a);

    let maxIndex = 0;
    while (n) {
        if(works[maxIndex] === 0) break;
        
        works[maxIndex]--;
        n--;
        
        if (works[maxIndex] < works[maxIndex + 1]) maxIndex++
        else maxIndex = 0;
    }
    return works.reduce((acc, curr) => acc + curr ** 2, 0);
}
