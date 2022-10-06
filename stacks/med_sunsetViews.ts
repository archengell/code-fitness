type input = {[key: string] : number[] | string }
/*** need to record the other solution !! */
enum Direction {
    East = 'EAST', // RIGHT 
    West = 'WEST', // LEFT
  }
 

function sunsetViews(buildings: number[], direction: string) {
    console.log(`${buildings}  ${direction}`)
    let bldgStack: number[] = [];
    
    let idx:any =  (direction === Direction.East) ? 0: buildings.length - 1;
    let step:number =  (direction === Direction.East) ? 1: -1;
    
    while(idx >= 0 && idx < buildings.length) {
        let bldgHt:number = buildings[idx]
        while(bldgStack.length > 0 && 
                buildings[bldgStack[bldgStack.length-1]] <= bldgHt
                ){
            bldgStack.pop()
        }
        bldgStack.push(idx)
        idx += step;
    }
    if(direction === Direction.West) bldgStack.reverse();
    console.log(bldgStack)
    return bldgStack;
}
let sunsetViewsTests: Record<string, input> = {
    test1: {'buildings': [3, 5, 4, 4, 3, 1, 3, 2], 'direction':"EAST"},
    test2: {'buildings': [3, 5, 4, 4, 3, 1, 3, 2], 'direction':"WEST"},
    test3: {'buildings': [10, 11], 'direction':"EAST"},
    test4: {'buildings': [2, 4], 'direction':"WEST"},
    test5: {'buildings': [1], 'direction':"EAST"},
    test6: {'buildings': [1], 'direction':"WEST"},
    test7: {'buildings': [], 'direction':"EAST"},
    test8: {'buildings': [], 'direction':"WEST"},
    test9: {'buildings': [7, 1, 7, 8, 9, 8, 7, 6, 5, 4, 2, 5], 'direction':"EAST"},
    test10: {'buildings': [1, 2, 3, 4, 5, 6], 'direction':"EAST"},
    test11: {'buildings': [1, 2, 3, 4, 5, 6], 'direction':"WEST"},
    test12: {'buildings': [1, 2, 3, 1, 5, 6, 9, 1, 9, 9, 11, 10, 9, 12, 8], 'direction':"WEST"},
    test13: {'buildings': [20, 2, 3, 1, 5, 6, 9, 1, 9, 9, 11, 10, 9, 12, 8], 'direction':"EAST"}
}



sunsetViews(sunsetViewsTests['test1']['buildings'] as number[], sunsetViewsTests['test1']['direction'] as string)

