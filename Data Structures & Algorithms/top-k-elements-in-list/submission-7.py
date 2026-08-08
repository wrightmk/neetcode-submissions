class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = [[] for _ in range(len(nums) + 1)]
        ans = []
        groups = {}

        for num in nums:
            groups[num] = 1 + groups.get(num, 0)

        for key,val in groups.items():
            freq[val].append(key)
        
        for i in range(len(freq) - 1, -1, -1):
            for num in freq[i]:
                ans.append(num)
                if len(ans) == k:
                    return ans

