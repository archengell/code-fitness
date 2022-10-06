import { createAdjList } from './easy_graph_createAdjList'


class CloneGraphNode {
    val: number
    neighbors: CloneGraphNode[]
    constructor(val?: number, neighbors?: CloneGraphNode[]) {
        this.val = (val === undefined ? 0 : val)
        this.neighbors = (neighbors === undefined ? [] : neighbors)
    }
}

/**
 * @description
 * @summary
 * @param node 
 * @returns 
 * @raises
 */
function cloneGraph(node: CloneGraphNode | null): CloneGraphNode | null {

    let visited = new Map<CloneGraphNode, CloneGraphNode>();
    
    if(!node) return null

    if(visited.has(node)){
        return visited.get(node)
    }
    
    console.log('node',node)
    let clone: CloneGraphNode = new CloneGraphNode(node.val)
    visited.set(node, clone)
    for(let neighbor of node.neighbors){
        clone.neighbors.push(cloneGraph(neighbor))
    }


    return clone
}



function makeGraph(edges){
    let graph = {}
    for(let i = 0; i < edges.length; i++){
        graph[i+1] = new CloneGraphNode(i+1)
    }
    edges.forEach((item, idx) => { // [2,4] --> [1,3] --> [2,4]
        ++idx
        for(let elem in item){ //2, 4, 1, 3, 
            graph[idx].neighbors.push(graph[elem])
        }
        graph[idx].neighbors.shift()
        
    })
    return graph
}

let edges = [[2, 4], [1, 3], [2, 4], [1, 3]]
let graph = makeGraph(edges)
console.log(graph)
// console.log(cloneGraph(graph[1]))