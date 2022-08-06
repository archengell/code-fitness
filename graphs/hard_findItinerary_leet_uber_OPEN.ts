
function findItinerary(tickets: string[][]): string[] {
    
    let edges: any;
    let adjList: any = {}

    addEdges<string>(tickets, adjList)
    console.log(adjList)

    return 
};

function addEdges<V>(edges: V[][], adjList: any){

    for(let i = 0; i< edges.length; i++){
        adjList[edges[i][0]].push(edges[i][1])
        adjList[edges[i][1]].push(edges[i][0])
    }
    
}

let findItineraryTests: string[][] = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];

findItinerary(findItineraryTests)