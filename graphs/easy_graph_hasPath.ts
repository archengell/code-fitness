import { Queue } from '../queues/queueSandBox'
import { Stack } from '../stacks/a_stackSandbox'
import * as typing from '../typing'
import { createAdjList } from './easy_graph_createAdjList'
import * as utils from '../utils'


/**
 * @description
 * Determine if there is a path from source to target in undirected graph.
 * @access 
 * Graph Algorithms for Tech Interviews
 * https://www.youtube.com/watch?v=tWVWeAqZ0WU&list=PLjMkA_ZkTgZya9X3riGIQvF0Py3KR4Kzd&index=12&t=15s
 * @param nodes 
 * @param edges 
 * @param src 
 * @param dest 
 * @param Type 
 * @returns {boolean}
 * @summary
 *      1. same as graph-iter-traversal
 *      2. init stack/visited w/ src
 *      3. if neighbor === dest return true
 */
function hasPathInGraph<T>(nodes: T[], edges: T[][], src: T, dest: T, Type = Stack): boolean {
    let initation: string = ( (Type === Stack) ? 
    'DFS Iterative initiated...' : 'BFS Interative initiated...');
    console.log(initation)

    let stackOrQueue: (Stack<T> | Queue<T>) = new Type([src])
    let visited = new Map<T, boolean>();

    let graph: any = createAdjList(edges, nodes)

    visited.set(src, true)
    while(stackOrQueue.length()){
        let current = stackOrQueue.remove();
        
        for(let neighbor of graph[current]){
            if(neighbor === dest) return true
            if(!visited.has(neighbor)) {
                visited.set(neighbor, true)
                stackOrQueue.add(neighbor)
            }          
        }
    }

    return false
}
    /** createAdjList alternative: */
    // let graph: {[key: number]: T[]} = {}
    // for(let edge of edges){
    //     let [node1, node2] = edge;
    //     if(!(node1 in graph)) graph[node1] = []
    //     if(!(node2 in graph)) graph[node2] = []
    //     graph && graph[node1].push(node2);
    //     graph && graph[node2].push(node1);
    // }

let hasPathTest2 = {
    'nodes': [0, 1, 2, 3, 4, 5],
    'edges': [[0,1],[0,2],[3,5],[5,4],[4,3]],
    'src': 0,
    'dest': 5
}
let hasPathTest1 = {
    'nodes': [0, 1, 2],
    'edges': [[0,1],[1,2],[2,0]],
    'src': 0,
    'dest': 2
}
let { nodes, edges, src, dest } = hasPathTest2

// console.time()
// console.log(hasPathInGraph<number>(nodes, edges, src, dest, Queue))
// console.timeEnd()
utils.timed('res', hasPathInGraph, [nodes, edges, src, dest])