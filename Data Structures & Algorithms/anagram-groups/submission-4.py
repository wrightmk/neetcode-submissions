class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = {}
        for string in strs:
            key = [0]*26
            for s in string:
                idx = ord(s) - ord('a')
                key[idx] += 1
            key = tuple(key)
            if key in groups:
                groups[key].append(string)
            else:
                groups[key] = [string]
        
        return [i for i in groups.values()]