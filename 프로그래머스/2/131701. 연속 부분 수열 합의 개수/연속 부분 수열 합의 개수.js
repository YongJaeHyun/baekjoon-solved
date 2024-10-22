function solution(elements) {
    const set = new Set();
    const circle = [...elements, ...elements];
    
    function dfs(num, idx, deps){
        if(deps === elements.length) return;
        
        set.add(num);
        dfs(num+circle[idx+1], idx+1, deps+1);
    }
    
    for(let i = 0; i < elements.length; i++){
        dfs(elements[i], i, 0);
    }
    
    return set.size;
}
