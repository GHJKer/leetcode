const link = 'https://leetcode.com/problems/two-sum/'

function twoSum(nums, target) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
      let cache = nums[i];
      delete nums[i];

      nums.find((n, index) => {
        if (cache + n === target) {
          console.log(cache, n)
          result.push(index)
        }
      })

      nums[i] = cache;
    }

    return result.sort();
  }
