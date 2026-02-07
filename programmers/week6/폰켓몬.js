function solution(nums) {
  const num = parseInt(nums.length / 2);
  const result = new Set(nums);
  return Array.from(result).length >= num ? num : Array.from(result).length;
}
