import * as typing from '../typing'


export class LinkedList <T> {
    
    constructor(public input?: T[]){
        this.input = input || new Array<T>()
    }
}