
interface IRes {
    'resString': string,
    'resNum': number
}

/**
 * hard - algoExp / Neet150 - longest Substring w/o Duplication
 * @description
 * Write a function that takes in a string and returns an object 
 * showing the longest substring and its length
 * @param string 
 * @returns {number || string} depends 
 * @summary
 *  1. init resArr w/ [0,1], resObj, startIdx, subStrLen
 *  2. loop thru str
 *  3. if duplication detected, reset startIdx to next unique char position
 *  4. store str length to map
 *  5. update subStrLen < i+1-startIdx, update resArr w/ [startIdx, i+1]
 *  6. extract subStr => str.splice(resArr[0], resArr[1])
 */
function longestSubstringWithoutDuplication(string: string): IRes {
    
    let resArr: number[] = [0,1]
    let resObj = {} as IRes //initialize a typed, empty object!
    let startIdx: number = 0;
    let cache = new Map<string, number>()
    let subStrLen: number;

    for(let i = 0; i < string.length; i++){
        if(cache.has(string[i])){
            //need to add ! to prevent TS2532: Object is 'possibly' undefined...
            // reset startIdx if duplication is detected...
            startIdx = Math.max(startIdx, cache.get(string[i])! + 1)
        }
        subStrLen = resArr[1] - resArr[0]
        if(subStrLen < i + 1 - startIdx) resArr = [startIdx, i+1]
        cache.set(string[i], i)
    }

    resObj['resString'] = string.slice(resArr[0], resArr[1])
    resObj['resNum'] = resObj['resString'].length 

    // return resObj['resString']
    return resObj
}



let longestSubStrNoDupTest1: string = 'clementisacap'
let longestSubStrNoDupTest2: string = ''


console.log(longestSubstringWithoutDuplication(longestSubStrNoDupTest1))