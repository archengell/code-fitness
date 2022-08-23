import { createAdjList } from '../graphs/easy_graph_createAdjList';
import { Stack } from '../stacks/a_stackSandbox'
import * as utils from '../utils'


function countConnectedComponents<T>(nodes, edges): number {

    let count: number = 0
    let stack = []
    let graph = {}
    let visited = new Map()

    for(let node of nodes){
        graph[node] = []
    }
    for(let edge of edges){
        let [node1, node2] = edge
        graph[node1].push(node2)
        graph[node2].push(node1)
    }

    for(let node of nodes){
        if(!visited.has(node)){
            stack.push(node)
            while(stack.length){
                let current = stack.pop()
                for(let neighbor of graph[current]){
                    if(!visited.has(neighbor)){
                        stack.push(neighbor)
                        visited.set(neighbor, true)
                    }
                }
            }
            ++count
        }
    }
    return count
}

let connectdCompsTest1 = {
    'nodes': [0, 1, 2, 3, 4],
    'edges': [[0,1],[1,2],[3,4]],
} // output: 2

let {nodes, edges} = connectdCompsTest1

utils.timed('res', countConnectedComponents, [nodes, edges])