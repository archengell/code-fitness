import { createAdjList } from '../graphs/easy_graph_createAdjList';
import { Stack } from '../stacks/a_stackSandbox'
import * as utils from '../utils'


// function makeGraph(edges: string[][], nodes: string[], undirected: boolean = true){


// }

// let nodes: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
// let edges: string[][] = [['a','b'], ['a','c'], ['a','d'], ['c','d'],
//     ['c','g'], ['d','g'], ['d','h'], ['b','e'], ['b','f'], ['e','i'], ['f', 'i']]

// utils.timed('res', createAdjList, [edges, nodes])


function graphTraversalIteratively(edges, nodes, DFS = true, 
    undirected= true, arr = []){
    
    
    // push current to arr
    // set up graph 
    let graph = {}
    for(let node of nodes){
        graph[node] = []
    }

    for(let edge of edges){
        let [node1, node2] = edge;
        if(undirected){
            graph[node1].push(node2);
            graph[node2].push(node1);
        }else{
            graph[node1].push(node2)
        }
    }
    
    // initiate stack/queue and visited cache
    let stackOrQueue = [nodes[0]]
    let visited = new Map();
    visited.set(nodes[0], true)

    // while loop based on pop or unshift
    while(stackOrQueue.length){
        let current = stackOrQueue.pop() // dfs/bfs = pop/unshift
        arr.push(current);
        for(let neighbor of graph[current]){
            if(!(visited.has(neighbor))){
                visited.set(neighbor, true)
                stackOrQueue.push(neighbor)
            }
        }
    }
}


function graphTraveseRecursively(graph, node, arr = [], visited = new Map()){
    
    if(visited.has(node)) return;
    arr.push(node)
    visited.set(node, true)
    for(let neighbor of graph[node]){
        graphTraveseRecursively(graph, neighbor, arr, visited)
    }
}

let nodes: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
let edges: string[][] = [['a','b'], ['a','c'], ['a','d'], ['c','d'],
    ['c','g'], ['d','g'], ['d','h'], ['b','e'], ['b','f'], ['e','i'], ['f', 'i']]