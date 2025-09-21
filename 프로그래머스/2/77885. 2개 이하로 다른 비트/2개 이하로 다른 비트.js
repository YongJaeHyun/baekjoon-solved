function solution(numbers) {
  return numbers.map(num => {
    if (num % 2 === 0) return num + 1;
    
    let binary = "0" + num.toString(2);
    let idx = binary.lastIndexOf("0");
    
    let arr = binary.split("");
    arr[idx] = "1";
    arr[idx + 1] = "0";
    
    return parseInt(arr.join(""), 2);
  });
}
