
/**
 * medium - array - is monotonic
 * @description
 * write a function that takes in an array of integers and returns a boolean
 * whether the array is monotonic: an array, from left-to-right, that is neither
 * entirely non-increasing or entirely non-decreasing. 
 * ** empty arrays and arrays with one element are monotonic. 
 * ** add visual examples of monotonic arrays to better understand numeric behavior
 * @summary
 * time: o(n) | space: o(1)
 * @param array 
 * @returns 
 */
function isMonotonic(array: number[]): boolean {

    let isUpwrdTrending: boolean = true; // is non-decreasing
    let isDwnwrdTrending: boolean = true; // is non-increasing

    if(!array.length) return true
    if(array.length === 1) return true

    for(let i = 0; i < array.length-1; i++){
        // console.log(`${array[i] - array[i+1]} || ${temp}`)
        if(array[i] < array[i+1]) isUpwrdTrending = false;
        if(array[i] > array[i+1]) isDwnwrdTrending = false;
    }
    
    return isUpwrdTrending || isDwnwrdTrending
  }

  let isMonotonic1: number[] = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
  let isMonotonic2: number[] = [];
  let isMonotonic3: number[] = [1];
  let isMonotonic9: number[] = [1, 2, 0];
  let isMonotonic13: number[] = [-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -8, -9, -10, -11];
  let isMonotonic17: number[] = [2, 2, 2, 1, 4, 5];

  console.log(isMonotonic(isMonotonic1))