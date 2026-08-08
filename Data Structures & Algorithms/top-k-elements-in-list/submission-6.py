class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        res = [[] for _ in range(len(nums))]
        ans = []
        groups = {}

        for num in nums:
            groups[num] = 1 + groups.get(num, 0)

        for key,val in groups.items():
            res[val - 1].append(key)
        
        for i in range(len(res) - 1, -1, -1):
            for j in range(len(res[i])):
                ans.append(res[i][j])
                if len(ans) == k:
                    return ans

