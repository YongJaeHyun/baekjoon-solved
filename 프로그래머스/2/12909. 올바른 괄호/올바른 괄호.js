function solution(s){
    const stack = []
    s.split('').forEach((str)=> str === "(" ? stack.push(str) : stack.pop() !== '(' && stack.push("("))
    return stack.length === 0
}