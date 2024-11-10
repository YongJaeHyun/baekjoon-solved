function solution(user_id, banned_id) {
    const answers = new Set();

    const dfs = (arr, userIds, depth) => { 
        if(banned_id.length === depth) answers.add(arr.sort().join(""));
        else {
            const newBanId = banned_id[depth].replaceAll('*','.');
            const regex = new RegExp('^'+newBanId+'$');
            userIds.forEach((id, idx)=>{
                if(regex.test(id)) {
                    const newUserIds = [...userIds.slice(0, idx), ...userIds.slice(idx+1)];
                    dfs([...arr, userIds[idx]], newUserIds, depth+1)
                }
            })
        }
    }
    dfs([], user_id, 0)
    return answers.size;
}