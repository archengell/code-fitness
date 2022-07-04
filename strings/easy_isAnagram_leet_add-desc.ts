Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false

function isAnagram(s: string, t: string): boolean {
    if(s.length != t.length) return false;
    
    return (JSON.stringify([...s].sort()) == JSON.stringify([...t].sort()))
};
