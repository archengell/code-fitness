
import { CreateBTNode as MaxDepthNode, convertArrToBinaryTree} from './easy_BT_createBinaryTree'

function maxDepth(root: MaxDepthNode | null): number {
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

console.log(maxDepth(convertArrToBinaryTree(getMaxDepthTest1)))