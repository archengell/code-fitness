import { convertArrToBinaryTree, CreateBTNode  } from './easy_BT_createBinaryTree'


function invertBT(root: CreateBTNode){

    if(!root) return null;

    let temp: CreateBTNode = root.left;
    root.left = root.right;
    root.right = temp;
    
    invertBT(root.left)
    invertBT(root.right)

    return preOrderTraversal(root)
}

function preOrderTraversal(root:CreateBTNode, arr: number[] = []){
    if(!root) return;
    arr.push(root.value)
    root.left && preOrderTraversal(root.left, arr);
    root.right && preOrderTraversal(root.right, arr);
    return arr
}   


let invertBTcase1: number[] = [4,2,7,1,3,6,9];
let invertBTcase2: number[] = [2,1,3]
let invertBTcase3: number[] = []

console.log(invertBT(convertArrToBinaryTree(invertBTcase1)))
