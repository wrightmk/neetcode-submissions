class Solution:

    def encode(self, strs: List[str]) -> str:
        res = ''
        for s in strs:
            res += str(len(s)) + '#' + s
        return res

    def decode(self, s: str) -> List[str]:
        # 5#Hello5#World
        res = []
        j = 0
        count = ''
        while j < len(s):
            if s[j] == '#':
                start = j + 1
                end = j + 1 + int(count)
                res.append(s[start:end])
                j = end
                count = ''
                if j >= len(s): 
                    return res
            count += s[j]
            j+=1

        return res

