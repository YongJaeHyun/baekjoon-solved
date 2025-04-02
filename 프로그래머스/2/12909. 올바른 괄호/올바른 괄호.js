function solution(s){
    const arr = []
    s.split('').forEach((str)=> str === "(" ? arr.push(str) : arr.pop() !== '(' && arr.push("("))
    return arr.length === 0
}