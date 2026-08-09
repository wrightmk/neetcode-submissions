class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        hashset = set(nums)
        res = 0
        for num in hashset:
            count = 0
            marker = num
            if num - 1 in hashset:
                continue
            while True:
                if marker in hashset:
                    count += 1
                    marker = marker + 1
                else:
                    break
            res = max(count, res)
        return res
        