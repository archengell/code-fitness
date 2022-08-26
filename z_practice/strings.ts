import * as utils from '../utils'


function maxSubStringLen(str: string){

    let cache = new Set<string>()
    let max: number = 0;
    for(let j = 0, i = 0;  i < str.length; i++){
        while(cache.has(str[i])){
            console.log(cache)
            cache.delete(str[j++])
        } 
        cache.add(str[i])
        max = Math.max(max, cache.size)
    }
    return max
}

let str1: string = 'abccxyz'

utils.timed('res', maxSubStringLen, [str1])