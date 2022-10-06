
import * as utils from '../../utils'

/**
 * medium - array - move element to end
 * @description
 * @summary
 * @param array 
 * @param toMove 
 * @returns 
 */
// (logn) time | (1) space -> 3.32 ms -> quickest, easiest to remember
export function moveElementToEnd(array: number[], toMove: number) {
    array.sort((a: number, b: number) => {
        if(a === toMove){
            return 1
        }
        if(b === toMove){
            return -1
        }
    })
    console.log(array)
    return array
}


// o(n) time | o(1) space -> 3.86 ms
export function moveElementToEnd_1(array: number[], toMove: number) {
    let left: number = 0;
    let right: number = array.length - 1
    let temp: number;
    while(left >= 0 && right < array.length && left < right && 
        left !== right){
            if(array[left] !== toMove) ++left
            if(array[right] === toMove) --right
            if(array[left] === toMove && array[right] !== toMove && left < right){
                temp = array[right]
                array[right] = array[left]
                array[left] = temp
            }
        }
    console.log(array)
    return array;
}

// o(n) time | o(1) space -> *** if you want to keep order of array!!
export function moveElementToEndAndKeepArrOrder(array: number[], toMove: number): number[] {

    let nextIdxToMove: number = null;

    for(let i = 0; i < array.length; i++){
        if(array[i] === toMove){
            if(nextIdxToMove === null) nextIdxToMove = i
        }else if(array[i] !== toMove){
            utils.swap(nextIdxToMove, i, array)
            ++nextIdxToMove
        }
    }
    console.log(array)
    return array
}


let moveElemToEnd1: any = {
    "array": [2, 1, 2, 2, 2, 3, 4, 2],
    "toMove": 2
}// [4,1,3,2,2,2,2]
let moveElemToEnd2: any = {
    "array": [],
    "toMove": 3
}// []
let moveElemToEnd3: any = {
    "array": [1, 2, 4, 5, 6],
    "toMove": 3
}// []
let moveElemToEnd7: any = {
    "array": [1, 2, 3, 4, 5],
    "toMove": 3
}// [1,2,5,4,3]
let moveElemToEnd8: any = {
    "array": [2, 4, 2, 5, 6, 2, 2],
    "toMove": 2
}// [6,4,5,2,2,2,2]
let moveElemToEnd9: any = {
    "array":  [5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12],
    "toMove": 5
}// [12,11,10,9,8,7,1,2,3,4,6,5,5,5,5,5,5]
let moveElemToEnd11: any = {
    "array":  [5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12],
    "toMove": 5
}// [12,1,2,11,10,3,4,6,7,9,8,5,5,5,5,5,5]

let { array, toMove } = moveElemToEnd8

utils.timed('res', moveElementToEndAndKeepArrOrder, [array, toMove])