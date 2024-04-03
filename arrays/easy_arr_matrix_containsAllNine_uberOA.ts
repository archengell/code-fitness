

/**
 * @description
 * needs to shift over and detect whether 
 * @summary
 * @param matrix 
 */
function containsNums(matrix: number[][]): boolean {

    
    for(let i = 1; i < matrix.length; i++){
        for(let j = 1; j < matrix.length; j++){
            console.log(matrix[i][j])
        }
    }
    return 
}


let containsNumsTest: number[][] =[
    [1, 2, 3, 5, 6, 4, 3, 2, 1],
    [4, 5, 6, 6, 7, 7, 6, 5, 4],
    [7, 8, 9, 1, 1, 3, 7, 8, 9]
]
// shift1 => 1,2,3,4,5,6,7,8,9
// shift2 => 2,3,5,5,6,6,8,9,1
// shitt3 => 3,5,6,6,6,7,9,1,1


containsNums(containsNumsTest)
