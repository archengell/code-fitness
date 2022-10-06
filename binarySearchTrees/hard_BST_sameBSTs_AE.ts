import * as utils from '../utils'

/**
 * @name hard - BST - Same BST - algoexpert
 * @access algoexpert 
 * @description
 * An array of integers is said to represent the BST obtained by inserting each 
 * integer in the array, from left to right, into the BST. 
 * 
 * Write a function that tkes in two arrays of integers and determines whether
 * these arrays represent the same BST.  Note that you're not allowed to construct
 * any BSTs in your code. 
 * @example 
 * INPUTS:
 * arrayOne: [10, 15, 8, 12, 94, 81, 5, 2, 11]
 * arrayTWo: [10, 8, 5, 15, 2, 12, 11, 94, 81] 
 * OUTPUT:
 * res: true
 * @param arrayOne 
 * @param arrayTwo 
 * @returns 
 */
function sameBSTs(arrayOne: number[], arrayTwo: number[]): boolean {

    let res: boolean = true;
    // verbose edition to track output against tests, o/w just return false/true
    if(arrayOne.length !== arrayTwo.length) {
        res = false 
        // console.log(res)
        return res
    }
    if(arrayOne[0] !== arrayTwo[0]){
        res = false 
        // console.log(res)
        return res
    }
    if(arrayOne.length === 0 && arrayTwo.length === 0){
        // console.log(res)
        return res
    }

    let _getSmaller = (arr: number[]): number[] => {
        let smaller: number[] = [] 
        for(let i = 1; i < arr.length; i++){
            if(arr[i] < arr[0]){
                smaller.push(arr[i])
            }
        }
        return smaller
    }

    let _getEqualOrBigger = (arr: number[]): number[] => {
        let equalOrBigger: number[] = [] 
        for(let i = 1; i < arr.length; i++){
            if(arr[i] >= arr[0]){
                equalOrBigger.push(arr[i])
            }
        }
        return equalOrBigger
    }

    let leftOne = _getSmaller(arrayOne)
    let leftTwo = _getSmaller(arrayTwo)
    let rightOne = _getEqualOrBigger(arrayOne)
    let rightTwo = _getEqualOrBigger(arrayTwo)


    return sameBSTs(leftOne, leftTwo) && sameBSTs(rightOne, rightTwo);
}

interface sameBST {
    'arrayOne': number[],
    'arrayTwo': number[]
}

let sameBST_tests: {[key: string]: sameBST} = {
    //true
    'test1': {
        "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2, 11],
        "arrayTwo": [10, 8, 5, 15, 2, 12, 11, 94, 81]
    },
    //true
    'test3': {
        "arrayOne": [7, 6, 5, 4, 3, 2, 1],
        "arrayTwo": [7, 6, 5, 4, 3, 2, 1]
    },
    //false
    'test5': {
        "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2],
        "arrayTwo": [11, 8, 5, 15, 2, 12, 94, 81]
    },
    //false
    'test7': {
        "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2, -1, 101, 45, 12, 8, -1, 8, 2, -34],
        "arrayTwo": [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 8, 12, 45, 100]
    },
    //false
    'test8': {
        "arrayOne": [5, 2, -1, 100, 45, 12, 8, -1, 8, 10, 15, 8, 12, 94, 81, 2, -34],
        "arrayTwo": [5, 8, 10, 15, 2, 8, 12, 45, 100, 2, 12, 94, 81, -1, -1, -34, 8]
    },
    //false
    'test9': {
        "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2, -1, 100, 45, 12, 9, -1, 8, 2, -34],
        "arrayTwo": [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 9, 12, 45, 100]
    },
    //false
    'test11': {
        "arrayOne": [7, 6, 5, 4, 3, 2, 1],
        "arrayTwo": [7, 6, 5, 4, 3, 2, 1, 0]
    },
}

let { arrayOne, arrayTwo } = sameBST_tests['test8'];

utils.timed('sameBSTs', sameBSTs, [arrayOne, arrayTwo])