import { convertArrToBinaryTree, CreateBTNode  } from './easy_BT_createBinaryTree'

/** Branch Sums - easy */
// time:  | space: 

function branchSums(tree: CreateBTNode ): number[] {
    
  //DFS - preorder traversal...
  let nodes: number[] = [];
  let sums: number[] = [];  
  let map = new Map<number, number[]>();

  calcBranchSums(tree, 0, sums, nodes, map);
  console.log(map)

  return sums;
}

function calcBranchSums(node: CreateBTNode, sum: number, sums: number[], 
  nodes: number[], map: Map<number, number[]>){    
  
  if(!node) return;

  nodes.push(node.value)
  let newSum: number = sum + node.value;
  
  if(!node.right && !node.left){

    /**
     * incredibly important to use Obj.assign()
     * otherwise the last iteration of nodes
     * repeats for every map assignment. 
     */
    let each: any = Object.assign([], nodes)
    sums.push(newSum);
    map.set(newSum, each)
  }
  
  calcBranchSums(node.left, newSum, sums, nodes, map);
  calcBranchSums(node.right, newSum, sums, nodes, map);
  nodes.pop()
}

let tree: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(JSON.stringify(convertArrToBinaryTree(tree), null, 4));

branchSums(convertArrToBinaryTree(tree))


