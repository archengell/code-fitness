
/**
 * AlgoExpert - medium - searching
 * you're given a 2-dimensional array ( a matrix ) of distinct integers 
 * and a target integer. each row in the matrix is sorted, and each column 
 * is also sorted; the matrix does necessarily ave the same height and width
 * 
 * Write a function that retuans an array of the row and column indices of 
 * the target integer if its contained in the matrix, otherwise [-1, -1]
 */

/**
 * @description brute force solution
 * @param matrix 
 * @param target 
 * @returns 
 * @raises
 */

// time: O(n+m) - n = rows; m = columns | space: O(1) *fastest solution!
function searchInSortedMatrix_algoExpSln(matrix: number[][], target: number): number[] {
    let res: number[] = [-1, -1];
    let row: number = 0;
    let col: number = matrix[0].length-1;
    while(row < matrix.length && col >=0){
        if(matrix[row][col] > target){
            col--;
        }else if(matrix[row][col] < target ){
            row++;
        }else{
            res = [row, col]
            break;
        }
    }
    console.log(res)
    return res
}

// time: O(nlogm) | space: o(1) :: slightly faster than brute
 function searchInSortedMatrix_binSrch(matrix: number[][], target: number): number[] {
    let res: number[] = [-1, -1];
    let start: number;
    let end: number;
    for(let i = 0; i < matrix.length; i++){
        if(matrix[i].includes(target)){
            // console.log(matrix[i])
            res[0] = i;
            start = 0;
            end = matrix[i].length-1;
            while(start <= end){
                let mid: number = Math.floor((start + end) *0.5)
                if(matrix[i][mid] < target){ 
                    start = mid + 1;
                }else if(matrix[i][mid] > target){
                    end = mid - 1;
                }else{
                    res[1] = mid
                    /** w/o break it'll cause an infinite
                     * loop when start == end...
                     */
                    break; 
                }
            }
        }
    }
    console.log(res);
    return res
}


function searchInSortedMatrix_brute(matrix: number[][], target: number): number[] {
    let res: number[] = [-1, -1];
    for(let i = 0; i < matrix.length; i++){
        for(let j =0; j < matrix[i].length; j++){
            if (matrix[i][j] == target) {
                res = [i, j];
            }
        }
    }
    console.log(res);
    return res
}

let searchInSortdMatrixTest: any = {
    'test1': {
        "matrix": [
            [1, 4, 7, 12, 15, 1000],
            [2, 5, 19, 31, 32, 1001],
            [3, 8, 24, 33, 35, 1002],
            [40, 41, 42, 44, 45, 1003],
            [99, 100, 103, 106, 128, 1004]
          ], 
          "target": 44
    }
}
console.time()
searchInSortedMatrix_algoExpSln(searchInSortdMatrixTest['test1']['matrix'], searchInSortdMatrixTest['test1']['target'])
console.timeEnd()