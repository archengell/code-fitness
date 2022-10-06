
/** Minimum Waiting Time - Easy */
/** time: O(nlogn) (sort method!!) | space: O(n) */ //my assessment
/** time: O(nlogn)  | space: O(1) */ //algoexpert sln

// function minimumWaitingTime(queries: number[]) {
//     let ascendOrderNumArr: number[] = queries.sort((a,b) => a-b)
//     let temp: number[] = []
//     let res: number = 0;

//     for(let i = 0; i < ascendOrderNumArr.length-1; i++){

//         /** my approach...*/
//         temp.push(ascendOrderNumArr[i])
//         console.log('temp', temp)
//         res += temp.reduce((accum, current) => accum + current)

//         /** algoExpert sln...*/
//         // let duration: number = ascendOrderNumArr[i];
//         // let left: number = ascendOrderNumArr.length - (i+1);
//         // console.log('duration', duration)
//         // console.log('left', left)
//         // res += duration * left
//         // console.log('res', res)
//     }

//     console.log('res', res)

//     return res;
// }

// let queries1: number[] = [3, 2, 1, 2, 6]; //17
// // let queries2: number[] = [2, 1, 1, 1] //6
// // let queries3: number[] = [1, 2, 4, 5, 2, 1] //23
// // let queries5: number[] = [1, 1, 1, 1, 1] //10
// // let queries6: number[] = [7, 9, 2, 3] //19
// // let queries7: number[] = [4, 3, 1, 1, 3, 2, 1, 8] //45
// // let queries14: number[] = [1, 1, 1, 4, 5, 6, 8, 1, 1, 2, 1] //81
// // let queries15: number[] = [17, 4, 3] //10
// minimumWaitingTime(queries1);


/** Class Photos - Easy  */
/** time: O(nlogn) | space: O(1) */

// function classPhotos(redShirtHeights: number[], blueShirtHeights: number[]) {
//     redShirtHeights.sort((a,b) => a-b);
//     blueShirtHeights.sort((a,b) => a-b);
 
//     return ( 
//         redShirtHeights.every((item, idx) => item < blueShirtHeights[idx]) ||
//         blueShirtHeights.every((item, idx) => item < redShirtHeights[idx])
//     );
// }

// let redShirtHeights1: number[] = [5, 8, 1, 3, 4];
// let blueShirtHeights1: number[] = [6, 9, 2, 4, 5];
// // let redShirtHeights3: number[] = [5, 8, 1, 3, 4, 9];
// // let blueShirtHeights3: number[] = [6, 9, 2, 4, 5, 1];
// // let redShirtHeights6: number[] = [1, 2, 3, 4, 5];
// // let blueShirtHeights6: number[] = [2, 3, 4, 5, 6];
// // let redShirtHeights9: number[] = [125];
// // let blueShirtHeights9: number[] = [126];
// // let redShirtHeights12: number[] = [3, 5, 6, 8, 2];
// // let blueShirtHeight12: number[] = [2, 4, 7, 5, 1];
// // let redShirtHeights15: number[] = [5, 6];
// // let blueShirtHeights15: number[] = [5, 4];

// console.log(classPhotos(redShirtHeights1, blueShirtHeights1));


/** tandemBicylce - easy */
/** assumptions:
 * the arrays are mutable
 * time: O(nlogn) *sorting | O(1) * returns (1) number
 */
function tandemBicycle(redShirtSpeeds: number[], blueShirtSpeeds: number[], fastest: boolean) {
    let sum: number = 0;
    if(fastest){
        redShirtSpeeds.sort((a,b)=> a-b)
        blueShirtSpeeds.sort((a,b)=>b-a)
        sum = redShirtSpeeds.reduce((accum, currentVal, currentIdx) => {
         let maxSpeed: number = Math.max(currentVal, blueShirtSpeeds[currentIdx]);
        //  console.log('maxSpd', maxSpeed)
         return accum + maxSpeed   
        },0)
    }else{
        redShirtSpeeds.sort((a,b) => a-b)
        blueShirtSpeeds.sort((a,b) => a-b)
        sum = redShirtSpeeds.reduce((accum, currentVal, currentIdx) => {
        let minSpeed: number = Math.max(currentVal, blueShirtSpeeds[currentIdx]);
        // console.log('minSpeed', minSpeed)
        return accum + minSpeed   
        },0)
    }
    return sum;
}

let fastest1: boolean = false;
let redShirtSpeeds1: number[] = [5, 5, 3, 9, 2];
let blueShirtSpeeds1: number[] = [3, 6, 7, 2, 1];


console.log(tandemBicycle(redShirtSpeeds1, blueShirtSpeeds1, fastest1))
