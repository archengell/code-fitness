
import { CreateBTNode as MaxDepthNode, convertArrToBinaryTree} from './easy_BT_createBinaryTree'

function getTreeDepth(root: MaxDepthNode | null): number {
    return getNodeHeight(root);
};

function getNodeHeight(root: MaxDepthNode){
    if(!root) {
        return -1;
    }else if(!root.left && !root.right) {
        return 0;
    }else{
        return 1 + Math.max(getNodeHeight(root.left), getNodeHeight(root.right))
    }
}

let getMaxDepthTest1: number[] = [3,9,20,null,null,15,7]
let test1: number[] = [ 11, 7, 15, 5, 9, 13, 20, 3, 6, 8, 10, 12, 14,18, 25] 

console.log(getTreeDepth(convertArrToBinaryTree(test1)))