class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # nums    [1, 2, 4,  6]
        # prefix  [1, 2, 8, 48]
        # postfix [48,48,24, 6]
        # output  [48,24,12, 8]
        prefix = 1
        result = [i for i in range(len(nums))]

        for idx, num in enumerate(nums):
            result[idx] = prefix
            prefix = num * prefix
        
        postfix = 1
        for idx in range(len(nums) - 1, -1, -1):
            result[idx] = result[idx] * postfix
            postfix = nums[idx] * postfix
        return result
        # 1,1,2,8
        # [48,24,6,1]
 



