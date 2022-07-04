import * as utils from '../utils'

/**
 * medium - recursion - algo expert - permutation - CLASSIC INTERVIEW PROBLEM!!
 * @description
 * write a function that takes in an array of unique integers and returns an 
 * array of all permutations of those integers in no particular order.
 * 
 * If the array is empty, the function should return an empty array.
 * 
 * array [1,2,3]
 * 
 * 
 * 
 * @summary
 * @param array 
 * @returns 
 */

// O(n*n!) time | o(n) space -> 0.152 ms
function getPermutations(array: number[]): number[][] {

    let perms: number[][] = [];

    let createPerm = (i: number, perm: number[], perms: number[][]): void => {
        if( i === perm.length - 1) {
            // slice() w/o arguments creates a copy of array
            perms.push([...perm])
        } else {
            for( let j = i; j < perm.length; j++){
                utils.swap(i, j, perm)
                createPerm(i + 1, perm, perms)
                utils.swap(i, j, perm)
            }
        }
    }
    createPerm(0, array, perms)
    console.log(perms)
    return perms
}

// O(n*n!) time | o(n) space -> 0.164 ms
function getPermutations_2(array: number[]): number[][] {

    let perm: number[] = []
    let perms: number[][] = []

    let createPerm = (array: number[], 
        perm: number[], perms: number[][]) => {
            if(!array.length && perm.length !== 0) {
                perms.push(perm)
            } else {
                for(let i = 0; i < array.length; i++){
                    let newArr: number[] = array.filter((_,idx) => idx !== i )
                    let newPerm: number[] = perm.concat(array[i])
                    createPerm(newArr, newPerm, perms)
                }   
            } 
    }
    createPerm(array, perm, perms)
    // console.log(perms)
    return perms
}

// O(n*n!) time | o(n) space -> 0.154 ms
function getPermutations_3(array: number[], perm: number[] = [], 
    perms: number[][] = []): number[][] {

        if(!array.length && perm.length !== 0) {
            perms.push(perm)
        } else {
            for(let i = 0; i < array.length; i++){
                let newArr: number[] = array.filter((_,idx) => idx !== i )
                let newPerm: number[] = perm.concat(array[i])
                getPermutations_3(newArr, newPerm, perms)
            }   
        } 
        return perms
}

let permutationTest1: number[] = [1, 2, 3];

utils.timed(getPermutations, [permutationTest1])
  