class TrieNode {
    constructor() {
        this.children = Array.from({length:26}, () => null)
        this.isEndOfWord = false
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let currentNode = this.root

        for (let char of word) {
            let idx = char.charCodeAt(0) - 'a'.charCodeAt(0)   

            if (currentNode.children[idx] === null) {
                currentNode.children[idx] = new TrieNode()
            }
            currentNode = currentNode.children[idx]
        }
        currentNode.isEndOfWord = true

    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let currentNode = this.root
        for (let char of word) {
            let idx = char.charCodeAt(0) - 'a'.charCodeAt(0)
            if (currentNode.children[idx] === null) {
                return false
            }
            currentNode = currentNode.children[idx]
        }
        return currentNode.isEndOfWord
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let length = 0
        let currentNode = this.root
        for (const char of prefix) {
            const idx = char.charCodeAt(0) - 'a'.charCodeAt(0)
            if (currentNode.children[idx] === null) {
                return false
            }
            currentNode = currentNode.children[idx]
            length++
        }
        return length === prefix.length
    }
}
