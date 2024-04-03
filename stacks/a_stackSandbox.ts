
import * as typing from '../typing'

export class Stack <T>{
    constructor(public input?: T[]){
        this.input = input || new Array<T>();
    }

    public add(elem: T){
        this.input.push(elem)
        // console.log(`added ${elem} ==> ${this.input}`)
    }

    public remove(){
        // console.log(`removing ${this.input[this.input.length-1]}`)
        return this.input.pop()
        // console.log(`arr is now ${this.input}`)
    }

    public length(){
        return this.input.length
    }
}

let res = new Stack<number>()

// res.add(5)
// res.add(14)
// res.remove()