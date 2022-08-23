import { Queue } from '../queues/queueSandBox'
import { Stack } from '../stacks/a_stackSandbox'
import * as typing from '../typing'
import { createAdjList } from './easy_graph_createAdjList'
import * as utils from '../utils'

/**
 * @description
 * Find the number of connected components in the undirected graph.
 * @summary
 * @resource 
 * Graph Algorithms for Tech Interviews
 * https://www.youtube.com/watch?v=tWVWeAqZ0WU&list=PLjMkA_ZkTgZya9X3riGIQvF0Py3KR4Kzd&index=12&t=15s
 * @param nodes 
 * @param edges 
 * @param Type 
 * @returns 
 */
function numOfConnectedComponents<T>(nodes: T[], edges: T[][], Type = Stack): number {

    let initation: string = ( (Type === Stack) ? 
    'DFS Iterative initiated...' : 'BFS Interative initiated...');
    console.log(initation)

    let graph: any = createAdjList(edges, nodes);
    let visited = new Map<T, boolean>();
    let count: number = 0;

    for(let node of nodes){

        if(!visited.has(node)) {
            let stackOrQueue: (Stack<T> | Queue<T>) = new Type([(node)]);

            while(stackOrQueue.length()){
            
                let current = stackOrQueue.remove()
        
                for(let neighbor of graph[current]){
                    if(visited.has(neighbor)) continue;
                    if(!visited.has(neighbor)) visited.set(neighbor, true);
                    stackOrQueue.add(neighbor);
                }
            }
            ++count;
        }
    }
    
    return count
}

let connectdCompsTest1 = {
    'nodes': [0, 1, 2, 3, 4],
    'edges': [[0,1],[1,2],[3,4]],
} // output: 2
let connectdCompsTest2 = {
    'nodes': [0, 1, 2, 3, 4],
    'edges': [[0,1],[1,2],[2,3],[3,4]],
} // output: 1

let {nodes, edges} = connectdCompsTest1;

utils.timed('res', numOfConnectedComponents, [nodes, edges, Stack])