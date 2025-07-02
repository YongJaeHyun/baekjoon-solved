function solution(skill, skill_trees) {
    let answer = 0;
    
    for(const skill_tree of skill_trees) {
        let currSkillTree = "";
        
        for(const s of skill_tree.split("")) {
            const idx = skill.indexOf(s);
            if(idx >= 0) {
                currSkillTree += s;
            }
        }
        if(skill.startsWith(currSkillTree)) answer++
    }
    
    return answer;
}