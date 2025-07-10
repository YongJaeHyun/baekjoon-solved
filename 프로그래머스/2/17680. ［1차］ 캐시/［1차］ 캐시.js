function solution(cacheSize, cities) {
    if(cacheSize === 0) return cities.length * 5;
    
    let answer = 0;
    const cache = [];
    
    for(let city of cities) {
        city = city.toLowerCase();
        
        if(cache.includes(city)) {
            const [ hittedCity ] = cache.splice(cache.indexOf(city), 1);
            cache.push(hittedCity);
            answer++;
        }
        else {
            if(cache.length === cacheSize) cache.shift();
            cache.push(city);
            answer += 5;
        }
    }
    return answer;
}