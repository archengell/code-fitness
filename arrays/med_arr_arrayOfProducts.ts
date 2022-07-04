import * as utils from '../utils'

/**
 * @name medium - algoExpert - Array - Array of Products
 * @description
 * Write a function that takes a non-empty array of integers
 * and returns an array of the same length, where each element
 * in the output array is equal to the product of every other 
 * number int he input array
 * @example 
 * @summary
 * 
 * @param array 
 * @returns number[]
 */
 // o(n^2) time | o(n) space --> 4.103ms
function arrayOfProducts_On2(array: number[]): number[]{

    let copyArr: number[] = [];
    let res: number[] = [];

    for(let i = 0; i < array.length; i++){
        copyArr = [...array];
        copyArr.splice(i,1)
        res.push(copyArr.reduce((accum:number, nextVal: number) => accum * nextVal))
    }
    console.log(res)
    return res;
  }

//o(n) time | o(n) space --> 0.545ms
function arrayOfProducts_On(array: number[]): number[]{

let res: number[] = new Array(array.length).fill(1)
let leftRunningProduct: number = 1;
let rightRunningProduct: number = 1;

for(let i = 0; i < array.length; i++){
    res[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
}
/**
 * at this point, and for test1, res = [1, 5, 5, 20]
 * @0,left=1, @1,left=1*5, @2,left=1*5*1, @3,left=1*5*1*4
 */

for(let i = array.length-1; i > -1; i--){
    // res = [1, 5, 5, 20]...
    // loop => 2, 4, 1, 5
    // @0, 
    res[i] *= rightRunningProduct; 
    rightRunningProduct *= array[i];
}
console.log(res)
return res;
}



let arrOfProdTest1: number[] = [5, 1, 4, 2]; // [8, 40, 10, 20]
let arrOfProdTest2: number[] = [1, 8, 6, 2, 4]
let arrOfProdTest3: number[] = [-5, 2, -4, 14, -6];
let arrOfProdTest4: number[] = [9, 3, 2, 1, 9, 5, 3, 2];
let arrOfProdTest6: number[] = [0, 0, 0, 0];
let arrOfProdTest10: number[] = [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrOfProdTest11: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrOfProdTest7: number[] = [-1, -1, -1];

utils.timed(arrayOfProducts_On2, [arrOfProdTest1])

utils.timed(arrayOfProducts_On, [arrOfProdTest1])