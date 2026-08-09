class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        buckets = [[] for _ in range(len(nums) + 1)]
        groups = {}
        res = []
        
        for num in nums:
            groups[num] = groups.get(num, 0) + 1
        
        for key,value in groups.items():
            buckets[value].append(key)

        for bucket in range(len(buckets) - 1, -1, -1):
            for num in buckets[bucket]:
                res.append(num)
                if (len(res) == k):
                    return res
            
