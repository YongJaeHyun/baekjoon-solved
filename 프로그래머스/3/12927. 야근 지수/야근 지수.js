function solution(n, works) {
    works.sort((a, b) => b - a);

    let i = 0;
    while (n > 0) {
        if (works[0] === 0) break;

        works[i]--;
        n--;
        while (i < works.length - 1 && works[i] < works[i + 1]) {
            [works[i], works[i + 1]] = [works[i + 1], works[i]];
            i++;
        }
        i = 0;
    }

    return works.reduce((acc, curr) => acc + curr ** 2, 0);
}
