class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # zxyzxyz
        # L  R
        # pwwkew
        #   L  R
        # abaac
        #    LR
        if len(s) == 0: return 0
        l, r = 0, 0
        charset = set()
        total = 0
        while r < len(s):
            while s[r] in charset:
                charset.remove(s[l])
                l += 1
            charset.add(s[r])
            total = max(total,len(charset))
            r+=1
        return total
            