import { IBinarySrchInput } from './easy_search_binarySearch'

function shiftedBinarySearch(array: number[], target: number) {
      
    let min: number = 0;
    let max: number = array.length - 1
    let sort: number[] = [...array].sort((a: number, b: number) => a - b)
    let shift: number = array.indexOf(target) - sort.indexOf(target)
    
    while( min <= max){
        let mid: number = Math.floor((min + max)/2)
        if(sort[mid] < target){
            min = mid + 1
        }else if(sort[mid] > target){
            max = mid - 1
        }else{
            return mid + shift
        }
    }
    return -1;
  }

  let shiftedbinarySearchTests: IBinarySrchInput = {
    'test1': {
        'array': [45, 61, 71, 72, 73, 0, 1, 21, 33, 37],
        'target': 33
        // output: 8
    },
    'test6': {
        'array': [72, 73, 0, 1, 21, 33, 37, 45, 61, 71],
        'target': 72
        // output: 0
    },
    'test9': {
        'array': [33, 37, 45, 61, 71, 72, 73, 355, 0, 1, 21],
        'target': 355
        // output: 7
    },
    'test11': {
        "array": [45, 61, 71, 72, 73, 0, 1, 21, 33, 37],
        "target": 45
        // output: 0
    },
    'test14': {
        "array": [45, 61, 71, 72, 73, 0, 1, 21, 33, 37],
        "target": 72
        // output: 3
    },
    'test20': {
        "array": [45, 61, 71, 72, 73, 0, 1, 21, 33, 37],
        "target": 38
        // output: -1
    }
}

console.log(shiftedBinarySearch(
    shiftedbinarySearchTests['test1']['array'], 
    shiftedbinarySearchTests['test1']['target'] 
    ))