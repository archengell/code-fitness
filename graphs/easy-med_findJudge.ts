/**
 * easy/medium* - graph - leetcode - find judge
 * @description
 * In a town, there are (n) people labeled form 1 to (n). There
 * is a rumor that one of these people is secretly the town judge.
 * 
 * If the town judge exists, then:
 *  - the town judge trusts noone.
 *  - everybody (except the judge) trusts the town judge.
 *  - there is exactly one person that satisfies 1 and 2.
 * 
 * You are given an array [trust] where [trust][i] = [a, b], 
 * representing that person-a trusts person-b. 
 * 
 * Return the label of the town judge if the town judge exists, 
 * and can be identified, otherwise return -1. 
 * @summary
 * - inDegree of node: # of edges going into the node. 
 * - outDegree of node: # of edges going away from the node.
 * - the judge node will have an inDegree = 0; outDegree = n-1 
 * - where n is # of nodes.
 * 
 * - quick steps::
 * -- initate two arrays w/ zeros @ length n+1
 * -- increment in + out-degree arrays
 * -- loop find if judge criteria is met: out=0, in=n-1
 * @param n 
 * @param trust 
 * @returns 
 */
function findJudge(n: number, trust: number[][]): number {
    
    //edge-case non-starter
    if(trust.length < n - 1) return -1
    
    let outDegree = new Array<number>(n+1).fill(0);
    let inDegree = new Array<number>(n+1).fill(0);

    //directed graph so, arr[0]=out; arr[1]=in
    for(let relation of trust){
        let [person1, person2] = relation;
        ++outDegree[person1]
        ++inDegree[person2]
    }

    console.log(outDegree)
    console.log(inDegree)
    for(let i = 1; i <= n; i++){
        if(outDegree[i] == 0 && inDegree[i] == n - 1) return i
    }
    return -1
}

let findJudgeTest1 = {
    'num': 3,
    'trust': [[1,3], [2,3]]
} // 3
let findJudgeTest2 = {
    'num': 3,
    'trust': [[1,2], [2,3]]
} // -2
let findJudgeTest3 = {
    'num': 3,
    'trust': [[1,3], [2,3], [3,1]]
}// -1
let findJudgeTest4 = {
    'num': 2,
    'trust': [[1,2]]
}// 2 
let findJudgeTest5 = {
    'num': 2,
    'trust': []
}// -1
let findJudgeTest6 = {
    'num': 1,
    'trust': []
}// 1

let {num, trust} = findJudgeTest6;

console.time()
console.log(findJudge(num, trust))
console.timeEnd()
