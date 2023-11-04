/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const respuesta = new Map();
    for (let i = 0; i < nums.length; i++) {
      const complemento = target - nums[i];
      if (respuesta.has(complemento)) {
        return [i, respuesta.get(complemento)];
      } else {
        respuesta.set(nums[i], i);
      }
    }
    return null;
};