

/**
 * Find Three Largest Numbers | Searching | Easy
 * @description
 * @summary
 * @param array 
 * @returns 
 */
function findThreeLargestNumbers(array: number[]) {
    let res:number[] = []
      while(res.length < 3){
          let maxNum:number = Math.max(...array)
          let maxNumIdx:number = array.indexOf(maxNum)
          res.push(Math.max(...array))
          array.splice(maxNumIdx, 1)
      }
      console.log(res.reverse())
    return res.reverse();
  }
  
let array:number[] = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
findThreeLargestNumbers(array)