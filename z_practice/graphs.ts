import { SpawnOptionsWithStdioTuple } from 'child_process';
import { createAdjList } from '../graphs/easy_graph_createAdjList';
import { Stack } from '../stacks/a_stackSandbox'
import * as utils from '../utils'

function hasCycle_Color(edges: number[][]){
    
    let state: string[] = []

    for(let node = 0; node < edges.length; node++){
        state[node] = 'white'
      }

    interface IStack {'direction': string, 'node': number}
    let stack: IStack[] = []
    stack.push({'direction': 'enter', 'node': 0})
    while(stack.length){
        let {direction, node} = stack.pop()
        if(direction === 'exit'){
            state[node] = 'black'
        } else {
            state[node] = 'gray'
            stack.push({'direction': 'exit', 'node': node})
            for(let neighbor of edges[node]){
                if(state[neighbor] === 'gray'){
                    return true
                }else if(state[neighbor] === 'white'){
                    stack.push({'direction': 'enter', 'node': neighbor})
                }
            }
        }
    }
    return false
    // let _dfsColor = (edges:number[][], node: number) => {
    //     stack.push(node)
    //     while(stack.length){
    //         let current: number = stack.pop()
    //         if(state[current] = 'white'){
    //             state[current] = 'grey'
    //             //edge case if node is in graph - not needed!
    //             //if current in graph
    //             for(let neighbor of edges[current]){   
    //                 if(state[neighbor] === 'grey') return true
    //                 if(state[neighbor] === 'white'){
    //                     stack.push(neighbor)
    //                 }
    //             }
    //         }else if(state[current] === 'grey' || state[current] === 'black'){
    //             state[current] = 'black'
    //             stack.pop()
    //         }
    //     }
    //     return false
    // }

    // for(let node = 0; node < edges.length; node++){
    //     if(_dfsColor(edges, node)) return true
    // }
    // return false
}

let edges1: number[][] = [[1, 3], [2, 3, 4], [0], [], [2, 5], []]; // true
let edges2: number[][] = [[1,2], [2], []] // false 
let edges3: number[][] = [[1,2], [2], [1]] // true
let edges7: number[][] = [[8], [0, 2], [0, 3], [0, 4], [0, 5], [0], [7], [8], [6]] // true
let edges8: number[][] = [[1], [2, 3, 4, 5, 6, 7], [], [2, 7], [5], [], [4], []] // false
let edges9: number[][] = [[1], [2, 3, 4, 5, 6, 7], [], [2, 7], [5], [], [4], [0]] // true
let edges12: number[][] = [[], [0,3], [0], [1, 2]] // true

utils.timed('res', hasCycle_Color, [edges12])