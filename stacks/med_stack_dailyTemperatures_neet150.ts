
/**
 * medium - stack - neet150 - daily temperatures
 * @description
 * given an array of integers representing daily temperatures, return an 
 * array answer such that answer[i] is the number of days you have to wait
 * after the [i]th day to get a warmer temperature.  If there is no future
 * day for which this is possible, answer[i] = 0.
 * 
 * example 1: 
 * input => [73,74,75,71,69,72,76,73]
 * output => [1,1,4,2,1,1,0,0]
 * 
 * example 2: 
 * input => [30,40,50,60]
 * output => [1,1,1,0]
 * @summary
 * brute force: time => o(n2) space => o(n)
 * optimal: time => o(n) space => o(n)
 * @param temperatures 
 * @raises
 */

//time => o(n2) space => o(n)
function dailyTemperatures_brute_On2(temperatures: number[]): number[] {

    let res: number[] = [];

    for(let today = 0; today < temperatures.length; today++){
        for(let forecastedWarmerDay = today + 1; 
            forecastedWarmerDay < temperatures.length; forecastedWarmerDay++){
            if(temperatures[forecastedWarmerDay] > temperatures[today]){
                res[today] = forecastedWarmerDay - today
                break
            }
        }
    }
    console.log(res)
    return res
};
//time => o(n) space => o(n)
function dailyTemperatures(temperatures: number[]): number[] {

    let stack: number[] = [];
    let res: number[] = []; 

    for(let idx = temperatures.length - 1; idx >= 0; idx--){
        while(stack.length && temperatures[idx] >= temperatures[stack[stack.length-1]]) stack.pop()
        res[idx] = stack.length ? stack[stack.length-1] - idx : 0;
        stack.push(idx);
    }
    console.log(res)
    return res
}


let dailyTemperatures1: number[] = [73,74,75,71,69,72,76,73] // [1,1,4,2,1,1,0,0]
let dailyTemperatures2: number[] = [30,40,50,60] // [1,1,1,0]
let dailyTemperatures3: number[] = [30,60,90] // [1,1,0]

dailyTemperatures(dailyTemperatures1)