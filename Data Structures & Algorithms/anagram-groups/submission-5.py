class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list)

        for string in strs:
            key = [0]*26
            for s in string:
                key[ord(s) - ord('a')] += 1
            res[tuple(key)].append(string)
        
        return list(res.values())