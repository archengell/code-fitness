
import { Queue } from '../queues/queueSandBox'
import { Stack } from '../stacks/a_stackSandbox'
import * as typing from '../typing'
import { createAdjList } from './easy_graph_createAdjList'

/**
 * @description
 * Iterative graph traversal w/ BFS, DFS options based on type of data structure.
 * @resource 
 * Graph Algorithms for Tech Interviews
 * https://www.youtube.com/watch?v=tWVWeAqZ0WU&list=PLjMkA_ZkTgZya9X3riGIQvF0Py3KR4Kzd&index=12&t=15s
 * @param nodes 
 * @param edges 
 * @param Type 
 * @param arr 
 * @returns 
 * @summary
 *      1. init graph
 *      2. create/init stack w/ first node
 *      3. create/init visited w/ first node
 *      4. while-loop
 *      5. get current: dfs/bfs = pop/unshift
 *      6. for-loop neighbors of graph[current]
 *      7. check visited.has(neighbor)
 *      8. if not, push neighbor to arr
 *      9. cache neighbor in visited
 */

function graphIterativeTraversal<N>(nodes: N[], edges: N[][] , Type = Stack, arr: N[] = []): N[]{

    let initation: string = ( (Type === Stack) ? 
    'DFS Iterative initiated...' : 'BFS Interative initiated...');
    console.log(initation)

    let adjList: typing.genericObj<N, N[]> = createAdjList<N>(edges, nodes);
    // console.log(adjList);
    let stackOrQueue: (Stack<N> | Queue<N>) = new Type<N>([nodes[0]]);

    let visited = new Map<N, boolean>(); // could just use a Set()...
    visited.set(nodes[0], true);
    while(stackOrQueue.length()){
        //***need to figure out why 'N' type doesnt work!! */
        let current: any = stackOrQueue.remove();
        arr.push(current);
        for(let neighbor of adjList[current]){
            if(!visited.has(neighbor)){
                visited.set(neighbor, true);
                stackOrQueue.add(neighbor);
            } 
        }
    }
    console.log(arr)
    return arr
}

let nodes: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
let edges: string[][] = [['a','b'], ['a','c'], ['a','d'], ['c','d'],
    ['c','g'], ['d','g'], ['d','h'], ['b','e'], ['b','f'], ['e','i'], ['f', 'i']]

graphIterativeTraversal<string>(nodes, edges);
// graphIterativeTraversal<string>(nodes, edges, Queue)