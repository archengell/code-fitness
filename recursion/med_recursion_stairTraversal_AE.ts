/**
 * @description
 * you're given two positive integers representing the height of a staircase and the max 
 * number of steps that you can advance up the staircase at a time.  Write a function that
 * returns the number of ways in which you can climb the staircase. 
 * 
 * For example, if you were given a staircase of height = 3 and maxStep = 2 you could climb
 * the staircase in 3 ways.  You could:
 * -- 1 step, 1 step, 1 step
 * -- 1 step, 2 step,
 * -- 2 step, 1 step
 * 
 * !note! maxStep <= height 
 * @summary
 * - initiate number of ways
 * - set ways to top cache @ 0 = 1 (base-case)
 * - 
 * @param height 
 * @param maxSteps 
 * @returns 
 */
// optimal sln: iterative  better because its easier to follow and poss. debug
function staircaseTraversal(height: number, maxSteps: number) {
    let numOfWays: number = 0;
    let waysToTop: number[] = [1];

    //loop through steps -> o(n)
    for(let currentHt: number = 1; currentHt < height + 1; currentHt++){
        let startIdx: number = currentHt - maxSteps - 1; 
        let endIdx: number = currentHt - 1
        // shift start of window by one
        if(startIdx >= 0) numOfWays -= waysToTop[startIdx] // waysToTop[1] = 1
        // shift end of window by one
        numOfWays += waysToTop[endIdx]
        waysToTop.push(numOfWays)
    }
    console.log(waysToTop)
    console.log(waysToTop[height])
    return waysToTop[height]
}

function staircaseTraversal_On(height: number, maxSteps: number) {

    

    return
}


let strCaseTrav1: any = {
    "height": 4,
    "maxSteps": 2
}// 5
let strCaseTrav2: any = {
    "height": 10,
    "maxSteps": 1
}
let strCaseTrav5: any = {
    "height": 1,
    "maxSteps": 1
}
let strCaseTrav7: any = {
    "height": 4,
    "maxSteps": 4
}
let strCaseTrav9: any = {
    "height": 100,
    "maxSteps": 1
}
let strCaseTrav11: any = {
    "height": 7,
    "maxSteps": 2
}
let strCaseTrav12: any = {
    "height": 5,
    "maxSteps": 3
}

let {height, maxSteps} = strCaseTrav12;

console.time()
staircaseTraversal(height, maxSteps)