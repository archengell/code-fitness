
/**
 * CodeSignal - Easy - Adjacent Elements Product
 * @description Given an array of integers, find
 * the pair of adjacent elements that has the largest
 * product and return that product.
 * @summary
 * @param arr 
 * @returns 
 */
function adjacentElemMaxProduct(arr: number[]): number {
    let product: number = 0;
    let max: number = 0;
    let maxProduct: number = -Infinity;
    let res: number[] = [];

    let map = new Map<number, number[]>()
    for(let i = 0; i < arr.length; i++ ){
        if(arr[i+1]){
            product = arr[i] * arr[i+1]
            maxProduct = Math.max(maxProduct, product)
            map.set(product, [arr[i], arr[i+1]])
        }
    }

    console.log(`maxProduct: ${maxProduct}, elements: ${map.get(maxProduct)}`)
    return 
}

//Tests
let adjElemProdTest1: number[] = [3, 6, -2, -5, 7, 3] // 21, [3,7]
let adjElemProdTest4: number[] = [1, 2, 3, 0] // 6, [2,3]
let adjElemProdTest9: number[] = [1, 0, 1, 0, 1000] // 0, [0,1000]
let adjElemProdTest6: number[] = [5, 6, -4, 2, 3, 2, -23] // 30, [5,6]
let adjElemProdTest5: number[] = [9, 5, 10, 2, 24, -1, -48] // 50, [5,10]
let adjElemProdTest10: number[] = [-23, 4, -3, 8, -12] // -12, [4,-3]

adjacentElemMaxProduct(adjElemProdTest10)