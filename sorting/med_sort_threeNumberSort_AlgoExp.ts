
/**
 * medium - sort - algoExp - three number sort
 * @description
 * You're given an array of integers and another array of (3) distinct integers.
 * The first array is guaranteed to only contain integers that are in the second
 * array, and the second array represents a desired order for the integers in the 
 * first array. For example, a second array of [x,y,z] represents a desired order
 * of [x,x,...,y,y,...,z,z,...,z] in the first array.
 * 
 * Write a function that sorts the firsty array according to the desired order in 
 * the second array. The function should perform this in place - o(n) - and it 
 * shouldn't use any auxiliary space - o(1). 
 * 
 * !!note!! the desired order wont necessarily be ascending/descending order, and 
 * the the first array wont necessarily contain all three integers found in the 
 * second array - it may contain one or two. 
 * 
 * leet_url: 
 * @summary
 * first attempt -> time: o(n) | space: o(n)
 * @param array 
 * @param order 
 * @returns 
 */
function threeNumberSort(array: number[], order: number[]) {

    let map = new Map<number, number>()
    let res: number[] = []

    for(let num of array){
        if(order.includes(num)){
            map.set(num, map.get(num) + 1 || 1 )
        }
    }

    for(let num of order){
        if(array.includes(num)){
            res = [...res, ...new Array(map.get(num)).fill(num)]
        }
    }
    console.log(map)
    console.log(res)
    return res;
}

let threeNumberSort1: any = {
    'arr': [1, 0, 0, -1, -1, 0, 1, 1],
    'order': [0, 1, -1]
}

let {arr, order} = threeNumberSort1

threeNumberSort(arr, order)