
import { Queue } from '../queues/queueSandBox'
import { Stack } from '../stacks/a_stackSandbox'
import * as typing from '../typing'


/**
 * @description ??? 
 * @param currentNode ???
 * @param newNode
 */
class Graph<V> {
    public vertices: V[];
    public edges: V[][];
    public adjList: any = {}; //add typings from SADE!
    public graphType: string = 'undirected';

    constructor(vertex: V[], edges?: V[][], graphType?: string){
        this.vertices = vertex || new Array<V>()
        this.edges = edges
        this.adjList = {};
    }

    public calc(){

        if(Array.isArray(this.vertices)){
            this.addVertices(this.vertices)
            this.addEdges(this.edges)
        }else {
            this.addVertex(this.vertices)
        }

        // this.printAdjList()
        this.initializeColor()
        this.dfs(this.printNode)
        this.getCycles()
        // this.bfs(this.vertices[0], this.printNode)
        // this.graphTraversalIterative(this.printNode, this.vertices[0], undefined, Stack)
    }

    /**
     * @description ??? 
     * @param currentNode ???
     * @param newNode
     */
    public addVertex(vertex: V){
        this.vertices.push(vertex);
        this.adjList[vertex] = new Array<V>();
    }

    /**
     * @description ??? 
     * @param currentNode ???
     * @param newNode
     */
    public addVertices(vertices: V[]): void {
        for(let i = 0; i< vertices.length; i++){
            this.adjList[vertices[i]] = new Array<V>();
        }
    }

    /**
     * @description ??? 
     * @param currentNode ???
     * @param newNode
     */
         public removeVertex(){

        }


    /**
     * @description ??? 
     * @param currentNode ???
     * @param newNode
     */
    public addEdge(vertex?: V, neighbor?: V){
        if(this.graphType = 'undirected'){
            this.adjList[vertex].push(neighbor);
            this.adjList[neighbor].push(vertex);
        }else{
            this.adjList[vertex].push(neighbor);
        }
    }

    /**
     * @description ??? 
     * @param currentNode ???
     * @param newNode
     */
    public removeEdge(){

    }
    /**
     * 
     * @param edges 
     */
    public addEdges(edges: V[][]){
        if(this.graphType == 'undirected'){
            for(let i = 0; i< edges.length; i++){
                this.adjList[edges[i][0]].push(edges[i][1])
                this.adjList[edges[i][1]].push(edges[i][0])
            }
        }else{
            for(let i = 0; i< edges.length; i++){
                this.adjList[edges[i][0]].push(edges[i][1])
            }
        }
    }

    /**
     * @description ??? 
     * @param currentNode ???
     * @param newNode
     */
    public printAdjList(){
        for (let i = 0; i < this.vertices.length; ++i){
            let neighbors: V[] = this.adjList[this.vertices[i]];
            console.log(`${this.vertices[i]} --> ${neighbors}`)
        }
    }

    /**
     * @description ??? 
     * @param currentNode ???
     * @param newNode
     */
    protected initializeColor<V>(){
        let color: any = {}; // NEED TO FIGURE OUT HOW TO TYPE THIS!!
        for(let i=0; i<this.vertices.length; i++){
            color[this.vertices[i]] = 'white'
        }
        return color
    }

    /**
     * @description DFS recursive
     * @param currentNode ???
     * @param newNode
     */
    public dfs(callback){
        console.log('dfsRecursive initiated...')
        let color = this.initializeColor()

        for(let i=0; i<this.vertices.length; i++){
            if(color[this.vertices[i]]  === 'white'){
                this.dfsRecursiveTraversal(this.vertices[i], color, callback)
            }
        }
    }

    /**
     * @description
     * @param vertex 
     * @param color 
     * @param callback 
     * @param parent 
     * @returns
     * @raises 
     */
    public dfsRecursiveTraversal(vertex: V, color: any, parent: any = {}, callback: Function){
        color[vertex] = 'grey';
        if(callback) {callback(vertex, parent[vertex])}
        let neighbors: V[] = this.adjList[vertex]
        for(let i=0; i<neighbors.length; i++){
            let neighbor: V = neighbors[i];
            if(color[neighbor] === 'white'){
                parent[neighbor] = vertex;
                this.dfsRecursiveTraversal(neighbor, color, callback, parent)
            }else if(color[neighbor] === 'black' && neighbor != parent[neighbor]){
                console.log(`${neighbor} visted, cycle detected...`)
            }
        }
        color[vertex] = 'black';
    }

    /**
     * @description graph iterative traversal that is DFS or BFS based on
     * whether type is selected as stack or queue respectively...
     * @param callback 
     * @param vertex 
     * @param arr 
     * @param Type 
     * @returns 
     * @raises
     */
    public graphTraversalIterative(callback, vertex: V, arr: V[] = [], Type = Stack){
        let initation: string = ( (Type === Stack) ? 
            'DFS Iterative initiated...' : 'BFS Interative initiated...');
            console.log(initation)
        /**
         * this works bc i already single out a node as a param 
         * when I invoke the function! -> this.vertices[0]
         */
        let stackOrQueue = new Type<V>([vertex]); 
        let visited = {};
        visited[vertex as any as string | number ] = true; // type coercion trick...
        let currentVertex: V;
        while(stackOrQueue.length()){
            currentVertex = stackOrQueue.remove();
            arr.push(currentVertex)
            if(callback){callback(currentVertex)}
            let neighbors: V[] = this.adjList[currentVertex]
            for(let i=0; i<neighbors.length; i++)
                if(!visited[neighbors[i] as any as string|number]){
                    visited[neighbors[i] as any as string|number] = true;
                    stackOrQueue.add(neighbors[i])
                }
        }
        console.log(arr)
        return arr
    }

    /**
     * @description ??? 
     * @void currentNode ???
     * @raises 
     */
    public getCycles(){
        let cycles: V[][] = []

        for(let edge of this.edges){
            for(let node of edge){
                this.cycleTraversal([node], cycles)
            }
        }
       console.log('cycles', cycles)
    }
    
    /**
     * @description
     * @param path 
     * @param cycles 
     * @returns
     * @raises
     */
    public cycleTraversal(path: V[], cycles: V[][]){

        let startNode: V = path[0];
        let nextNode: V | null = null;
        let sub: V[] = [];

        for(let edge of this.edges){
            let [node1, node2] = edge;
            if(edge.includes(startNode)){
                nextNode = (node1 === startNode) ? node2 : node1;
            }
            if(!path.includes(nextNode)){
                sub = [nextNode].concat(path)
                this.cycleTraversal(sub, cycles)
            }else if( path.length > 2 &&
                nextNode === path[path.length -1]){
                    if(isUnique(path)) cycles.push(path);
                }
        }

        function isUnique(path: V[]){
            for(let cycle of cycles){
                if(path.every(elem => cycle.includes(elem))){
                    return false
                }
            }
            return true
        }
    }

    /**
     * @description ??? 
     * @param vertex ???
     * @param parent
     * @returns
     * @raises
     */
    public printNode(vertex, parent){
        console.log(`Visited vertex: ${vertex} , parent: ${parent}`)
    }

}

let vertices: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
let edges: string[][] = [['a','b'], ['a','c'], ['a','d'], ['c','d'],
    ['c','g'], ['d','g'], ['d','h'], ['b','e'], ['b','f'], ['e','i'], ['f', 'i']]

let test = new Graph<string>(vertices, edges)
test.calc()