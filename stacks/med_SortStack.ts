function sortStack(stack: number[]) {
    if(!stack.length) return stack;

    let next = stack.pop()!

    sortStack(stack);

    insertInOrder<number>(stack, next);

    // console.log(`${stack} :: ${next}`)

    return stack;
}

function insertInOrder<T extends number>(stack:T[], next:T){

    if( !stack.length || stack[stack.length-1] <= next){
		stack.push(next);
		return;
	}

    /** lines 25 - 37: if peeking at last item in stack is 
     * not permitted. 
     */
    // let tempTopPeek: T;

	// if(!stack.length){
	// 	stack.push(next);
	// 	return;
	// }else{
    //     tempTopPeek = stack.pop()!;
    //     stack.push(tempTopPeek);
    //     if(tempTopPeek <= next){
    //         stack.push(next);
    //         return;
    //     }
    // }

	let top = stack.pop()!;

	insertInOrder<number>(stack, next);

	stack.push(top);
}

const sortStackTests = {
    case1: { 
        "stack": [-5, 2, -2, 4, 3, 1]
    }, 
    case2: { 
        "stack": [3, 4, 5, 1, 2]
    }, 
    case3: { 
        "stack": [0, -2, 3, 4, 1, -9, 8]
    }, 
    case4: { 
        "stack": [2, 4, 22, 1, -9, 0, 6, 23, -2, 1]
    }, 
    case5: { 
        "stack": [3, 4, 5, 1, 2]
    }, 
    case6: { 
        "stack": [-1, 0, 2, 3, 4, 1, 1, 1]
    }, 
    case7: { 
        "stack": []
    }, 
    case8: { 
        "stack": [1]
    }, 
    case9: { 
        "stack": [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    }, 
    case10: { 
        "stack": [9, 2, 8, 1]
    }, 
    case11: { 
        "stack": [2, 33, 44, 2, -9, -7, -5, -2, -2, -2, 0]
    }, 
    case12: { 
        "stack": [3, 3, 3, 3, 3, 3]
    }, 
    case13: { 
        "stack": [0, 0]
    }, 
    case14: { 
        "stack": [2, 22, 222, 3, 33, 33, 9, 2, 3, 312, -9, -2, 3]
    }, 
    case15: { 
        "stack": [3, 4, 5, 1, 2, 2, 2, 1, 3, 4, 5, 3, 1, 3, -1, 2, 3]
    }, 
}

console.log(sortStack(sortStackTests['case1']['stack']))