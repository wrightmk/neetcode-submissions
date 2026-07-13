class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore.has(key)) {
            this.keyStore.get(key).push([value,timestamp])
        } else {
            this.keyStore.set(key, [[value, timestamp]])
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const store = this.keyStore.get(key)
        if (!store) return ''
        let L = 0
        let R = store.length - 1

        let result = ''

        while (L <= R) {
            let MID = Math.floor((L+R)/2)
         
            if (timestamp >= store[MID][1]) {
                L = MID + 1
                result = store[MID][0]
            } else {
                R = MID - 1
            }
        }

        return result
    }
}
