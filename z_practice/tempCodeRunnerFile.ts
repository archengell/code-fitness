
        visited.set(node, true)
        while(stack.length){
            console.log(stack)
            let current: number = stack.pop()
            arr.push(current)
            state[current] = 'grey'
            console.log(state)
            for(let neighbor of edges[current]){                
                if(state[neighbor] === 'grey') return true
                if(!visited.has(neighbor)){
                    stack.push(neighbor)
                    visited.set(neighbor, true)
                }
            }
            // state[current] = 'black'
        }
    }