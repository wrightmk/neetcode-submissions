class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): return False
        s_count = Counter(s)
        for i in t:
            if s_count[i] and s_count[i] > 0:
                s_count[i] -= 1
            else:
                return False
        return True