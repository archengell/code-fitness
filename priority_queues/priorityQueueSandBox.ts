import * as typing from '../typing'

interface iPriorityQueue<T> {
    add(priority: number, item: T): void
    peek(): T
    pop(): T
    size(): number
    isEmpty(): boolean
  }

export const priorityQueue = <T>(): iPriorityQueue<T> => {

    const data: [number, T][] = []

    return {

        add: (priority, value) => {
            if(data.length === 0){
                data.push([priority, value])
                return
            }

            for(let i = 0; i < data.length; i++){
                if(i === data.length - 1){
                    data.push([priority, value])
                    return
                }
                if(data[i][0] > priority){
                    data.splice(i, 0, [priority, value])
                    return
                }
            }
        }

        peek: () =>{

        }
    }
}