function minSteps(s, t) {
    const freqMap = new Map();
    
    for (let char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }
    
    let difference = 0;
    
    for (let char of t) {
        const count = freqMap.get(char);
        if (count === undefined || count === 0) {
            difference++;
        } else {
            freqMap.set(char, count - 1);
        }
    }
    
    return difference;
}
