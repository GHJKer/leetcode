function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) return 0;
    let comboCount = '';
    const result = [0];
    for (let i = 0; i < s.length; i++) {
        const currentLetter = s[i];
        if (!comboCount.includes(currentLetter)) {
            comboCount += currentLetter;
            result.push(comboCount.length)
        } else {
            result.push(comboCount.length)
            comboCount += currentLetter;
            const currentLetterIndex = comboCount.indexOf(currentLetter)
            comboCount = comboCount.slice(currentLetterIndex + 1);
        }
    }
    return Math.max(...result);
};
