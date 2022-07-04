import * as typing from '../typing'
import { createAdjList } from './easy_graph_createAdjList'

/**
 * @description
 * @summary
 * @resource 
 * Graph Algorithms for Tech Interviews
 * https://www.youtube.com/watch?v=tWVWeAqZ0WU&list=PLjMkA_ZkTgZya9X3riGIQvF0Py3KR4Kzd&index=12&t=15s
 * @param graph 
 * @param node 
 * @param arr 
 * @param visited 
 * @returns 
 */
export function graphDfsRecursive(graph: typing.genericObj<any,any[]>, node: any, 
    arr: any[] = [], visited: Map<any,Boolean> = new Map()){

        if(visited.has(node)) return;

        arr.push(node)
        visited.set(node, true)

        for(let neighbor of graph[node]){
            graphDfsRecursive(adjList, neighbor, arr, visited)
        }

    return arr    
}

let nodes: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
let edges: string[][] = [['a','b'], ['a','c'], ['a','d'], ['c','d'],
    ['c','g'], ['d','g'], ['d','h'], ['b','e'], ['b','f'], ['e','i'], ['f', 'i']]

let adjList: typing.genericObj<any, any[]> = createAdjList<any>(nodes, edges);
console.log(graphDfsRecursive(adjList, Object.keys(adjList)[0]))