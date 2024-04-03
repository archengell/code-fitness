function searchMatrix(matrix: number[][], target: number): boolean {
    
    for(let row = 0; row < matrix.length; row++){
        if(matrix[row].includes(target)){
            return (binarySearch(matrix[row], target) >= 0)
        }
    }
    return false
};

function binarySearch(array: number[], target: number): number {
    let min: number = 0;
    let max: number = array.length - 1;
    let sorted: number[] = array.sort((a: number, b: number) => a - b);
    let mid: number;

    while(min <= max){
        mid = Math.floor((min + max) / 2)
        if(sorted[mid] < target){
            min = mid + 1
        }else if(sorted[min] > target){
            max = mid - 1
        }else{
            return mid
        }
    }
    return -1
}

interface search2dMatrixInput { 
    [key:string] : {
        'array': number[][],
        'target': number
    }
}

let searh2dMatrixTests: search2dMatrixInput = {
    'test1': {
        'array': [[1,3,5,7],[10,11,16,20],[23,30,34,60]],
        'target': 3
        // output: true
    },
    'test2': {
        'array': [[1,3,5,7],[10,11,16,20],[23,30,34,60]],
        'target': 14
        // output: false
    }
}

console.log(searchMatrix(searh2dMatrixTests['test2']['array'], searh2dMatrixTests['test2']['target'] ))