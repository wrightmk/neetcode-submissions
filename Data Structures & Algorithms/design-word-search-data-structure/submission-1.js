class TrieNode {
    constructor() {
        this.children = Array.from({ length:26 }, () => null )
        this.hasEnded = false
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let currentNode = this.root
        for (const char of word) {
            let idx = char.charCodeAt(0) - 'a'.charCodeAt(0)
            if (currentNode.children[idx] === null) {
                currentNode.children[idx] = new TrieNode()
            }
            currentNode = currentNode.children[idx]
        }
        currentNode.hasEnded = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word, currentNode = this.root) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === '.') {
                for (let slot of currentNode.children) {
                    if (slot !== null) {
                        if (this.search(word.slice(i + 1), slot)) return true
                    }
                }
                return false
            } else {
                let idx = word[i].charCodeAt(0) - 'a'.charCodeAt(0)
                if (currentNode.children[idx] === null) {
                    return false
                }
                currentNode = currentNode.children[idx]
            }
        }
        return currentNode.hasEnded
    }
}
