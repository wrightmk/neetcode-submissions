class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        # AAABABB
        # L.   R
        freq = defaultdict(int)
        l, mostf, res = 0, 0, 0
        for r in range(len(s)):
            freq[s[r]] += 1
            # {a: 4, b: 1}
            mostf = max(mostf, freq[s[r]])
            while r - l + 1 - mostf > k:
                freq[s[l]] -= 1
                l += 1
            res = max(res, r - l + 1)
        return res

