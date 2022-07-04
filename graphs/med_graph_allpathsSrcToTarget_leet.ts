
/**
 * medium - leetcode - all paths from source to target 
 * @description
 * Given a directed acyclic graph - DAG - of (n) nodes labeled 
 * 0-to-(n-1), find all possible paths from node[0] to node[n-1]
 * and return them in any order. 
 * 
 * The graph is given as graph[i] is a list of all nodes you can visit 
 * from node i, i.e. there is a directed edge from node i to node graph[i][j]
 * 
 * @summary
 * @param graph 
 * @returns
 * @raises 
 */


// DFS - Iterative - No need to BACKTRACK! Tracking node...
function allPathsSourceTarget_DFS_Iter1(graph: number[][]): number[][] {

    interface IMap {node: number, path: number[]}
    let res: number[][] = [];
    let stack: IMap[] = [];
    
    stack.push({'node': 0, 'path':[0]})

    while(stack.length){
        let {node, path} = stack.pop()
        if(node === graph.length-1){
            res.push(path)
        }
        for(let elem of graph[node]){
            stack.push({'node': elem, 'path': [...path, elem]})
        }
    }
    return res
};

/**
 * DFS - Iterative - No need to BACKTRACK! w/o tracking node... FASTER! 
 * AND EASIER TO UNDERSTAND & CODE DURING INTERVIEW!
 */
function allPathsSourceTarget_DFS_Iter2(graph: number[][]): number[][] {

    let res: number[][] = [];
    let stack: number[][] = [];
    let path: number[] = [];

    stack.push([0])

    while(stack.length){
        path = stack.pop()
        if(path[path.length-1] === graph.length-1){
            res.push(path)
        }
        for(let elem of graph[path[path.length-1]]){
            stack.push([...path, elem])
        }
    }
    return res
}

/**
 * RECUSIVE DFS BACKTRACKING APPROACH
 */



/**
 * RECUSIVE TOP-DWN DYNAMIC PROGRAMMING W/ MEMOIZATION
 */


let allPathsSrcToTargetTest1 = [[1,2],[3],[3],[]]
let allPathsSrcToTargetTest2 = [[4,3,1],[3,2,4],[3],[4],[]]

console.time()
console.log(allPathsSourceTarget_DFS_Iter2(allPathsSrcToTargetTest2))
console.timeEnd()
