
interface ILongestSubstringNoDuplicationRes {
    'resString': string,
    'resNum': number
}

/**
 * hard - algoExp / Neet150 - longest Substring w/o Duplication
 * @description
 * Write a function that takes in a string and returns its 
 * longest substring w/o duplicate characters.
 * @summary
 * @param string 
 * @returns 
 */
function longestSubstringWithoutDuplication(string: string): string | number{
    
    let resArr: number[] = [0,1]
    let resObj = {} as ILongestSubstringNoDuplicationRes //initialize a typed, empty object!
    let res: string | number;
    let startIdx: number = 0;
    let cache = new Map<string, number>()
    let subStringLength: number;

    for(let i = 0; i<string.length; i++){
        if(cache.has(string[i])){
            //need to add ! to prevent TS2532: Object is 'possibly' undefined...
            startIdx = Math.max(startIdx, cache.get(string[i])! + 1)
        }
        subStringLength = resArr[1] - resArr[0]
        if(subStringLength < i+1 - startIdx) resArr = [startIdx, i+1]
        cache.set(string[i], i)
    }

    resObj['resString'] = string.slice(resArr[0], resArr[1])
    resObj['resNum'] = resObj['resString'].length 

    // return resObj['resString']
    return resObj['resNum']
}



let longestSubStrNoDupTest1: string = 'clementisacap'
let longestSubStrNoDupTest2: string = ''


console.log(longestSubstringWithoutDuplication(longestSubStrNoDupTest1))