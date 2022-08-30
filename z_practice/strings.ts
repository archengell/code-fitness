import * as utils from '../utils'


function maxSubStringLen(str: string){

    let map = new Map<number, string[]>()
    let set = new Set<string>()
    let max: number = 0;
    for(let j = 0, i = 0;  i < str.length; i++){
        while(set.has(str[i])){
            console.log(set)
            set.delete(str[j++])
        } 
        set.add(str[i])
        max = Math.max(max, set.size)
    }
    return max
}

let str1: string = 'abccxyz'

utils.timed('res', maxSubStringLen, [str1])