function solution(nums) {
    const set = new Set(nums);
    const maxNum = nums.length / 2
    return maxNum < set.size ? maxNum : set.size
}