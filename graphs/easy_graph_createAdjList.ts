import * as typing from '../typing'
import * as utils from '../utils'

/**
 * 
 * @param edges 
 * @param nodes 
 * @param undirected 
 * @returns 
 */
export function createAdjList<v>(edges: v[][], nodes?: v[],
    undirected = true): typing.genericObj<v,v[]>{
    let adjList: any = {};

    if(nodes){
        for(let node of nodes){
            adjList[node] = [];
        }
    }else{
        for(let idx = 1; idx <= edges.length; idx++){
            adjList[idx] = []
        }
    }

    for(let edge of edges){
        let [node1, node2] = edge;
        if(undirected){
            adjList[node1].push(node2);
            adjList[node2].push(node1);
        }else{
            adjList[node1].push(node2);
        }
    }
    return adjList
}

let nodes: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
let edges: string[][] = [['a','b'], ['a','c'], ['a','d'], ['c','d'],
    ['c','g'], ['d','g'], ['d','h'], ['b','e'], ['b','f'], ['e','i'], ['f', 'i']]

//disconnected graph: 4 sub-graphs!
// let nodes: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];
// let edges: string[][] = [['a','b'], ['a','c'], ['b','d'], ['b', 'e'], ['c', 'd'], 
//     ['f','g'], ['g', 'h'], ['i','j'], ['i','k'], ['j', 'k']]

utils.timed('res', createAdjList, [edges, nodes])