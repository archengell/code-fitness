import * as utils from '../utils'


/**
 * hard - sort - algo exp - quick sort
 * @description
 * write a function that akes in an array of integers and returns a sorted
 * version of that array.  Use the quick sort algorithm to sort the array. 
 * resource: https://dev.to/shubhamtiwari909/quicksort-algorithm-in-javascript-5841
 * @summary
 * @param array 
 * @returns 
 */
function quickSort(array: number[]): number[] {

    if(array.length <= 1){
        return array;
      }
    
      const pivot = array[array.length - 1];
      const leftArr = [];
      const rightArr = [];
    
      for(let i=0; i < array.length - 1; i++){
        if(array[i] < pivot){
          leftArr.push(array[i]);
        }
        else{
          rightArr.push(array[i])
        }
      }
    
    return [...quickSort(leftArr) , pivot, ...quickSort(rightArr)];
    
}



let quickSort1: number[] = [8, 5, 2, 9, 5, 6, 3];
let quickSort2: number[] = [1];
let quickSort8: number[] = [-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8];
let quickSort9: number[] = [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8];
let quickSort12: number[] = [2, -2, -6, -10, 10, 4, -8, -1, -8, -4, 7, -4, 0, 9, -9, 0, -9, -9, 8, 1, -4, 4, 8, 5, 1, 5, 0, 0, 2, -10]
let quickSort15: number[] = [991, -731, -882, 100, 280, -43, 432, 771, -581, 180, -382, -998, 847, 80, -220, 680, 769, -75, -817, 366, 
    956, 749, 471, 228, -435, -269, 652, -331, -387, -657, -255, 382, -216, -6, -163, -681, 980, 913, -169, 972, -523, 354, 747, 805, 
    382, -827, -796, 372, 753, 519, 906]
let quickSort18: number[] = [-19, 759, 168, 306, 270, -602, 558, -821, -599, 328, 753, -50, -568, 268, -92, 381, -96, 730, 629, 678, 
    -837, 351, 896, 63, -85, 437, -453, -991, 294, -384, -628, -529, 518, 613, -319, -519, -220, -67, 834, 619, 802, 207, 946, -904, 
    295, 718, -740, -557, -560, 80, 296, -90, 401, 407, 798, 254, 154, 387, 434, 491, 228, 307, 268, 505, -415, -976, 676, -917, 937, 
    -609, 593, -36, 881, 607, 121, -373, 915, -885, 879, 391, -158, 588, -641, -937, 986, 949, -321]
let quickSort19: number[] = [-823, 164, 48, -987, 323, 399, -293, 183, -908, -376, 14, 980, 965, 842, 422, 829, 59, 724, -415, -733, 
    356, -855, -155, 52, 328, -544, -371, -160, -942, -51, 700, -363, -353, -359, 238, 892, -730, -575, 892, 490, 490, 995, 572, 888, 
    -935, 919, -191, 646, -120, 125, -817, 341, -575, 372, -874, 243, 610, -36, -685, -337, -13, 295, 800, -950, -949, -257, 631, -542, 
    201, -796, 157, 950, 540, -846, -265, 746, 355, -578, -441, -254, -941, -738, -469, -167, -420, -126, -410, 59]

console.log(quickSort(quickSort19))