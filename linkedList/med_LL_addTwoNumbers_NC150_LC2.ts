import * as utils from '../utils'
import * as LinkedList from './a_linkedListNodeClasses'
import { SinglyLinkedList } from './med_LL_singlyLinkedListConst_Gen'


/**
 * 
 * @param l1 
 * @param l2 
 * @returns 
 */
function addTwoNumbers(l1: LinkedList.SLL_Node | null, 
    l2: LinkedList.SLL_Node | null): LinkedList.SLL_Node | null {

    let res: LinkedList.SLL_Node | null = null;
    let cache1: number[] = [];
    let cache2: number[] = [];

    // parse LL to array -> o(n) time / o(n) space
    let h1: LinkedList.SLL_Node = l1['head'];
    let h2: LinkedList.SLL_Node = l2['head'];

    while(h1){
        cache1.push(h1.value);
        h1 = h1.next;
    }
    while(h2){
        cache2.push(h2.value);
        h2 = h2.next;
    }

    // parse each array into number than add
    let sum: number = parseInt(cache1.reverse().join('')) + parseInt(cache2.reverse().join(''));
    // parse sum into number array in reverse -> o(n) time
    let sumArr: number[] = Array.from(String(sum), Number).reverse()
    console.log(sumArr)

    const _arrToLinkedList = (arr: number[]) => {
        let precursor: LinkedList.SLL_Node = new LinkedList.SLL_Node(0);
        let curr: LinkedList.SLL_Node = precursor;

        arr.map((item: number) => {
            curr.next = new LinkedList.SLL_Node(item);
            curr = curr.next;
            
        })
        return precursor.next;
    }

    // parse sum array into linked list -> o(n) time
    res = _arrToLinkedList(sumArr);
    return res
};

let addTwoNums1 = {
    'l1': [2,4,3],
    'l2': [5,6,4]
} // 807 [7,0,8]
let addTwoNums2 = {
    'l1': [0],
    'l2': [0]
} // 0 [0]
let addTwoNums3 = {
    'l1': [9,9,9,9,9,9,9],
    'l2': [9,9,9,9]
} // 10009998 [8,9,9,9,0,0,0,1]
let addTwoNums4 = {
    'l1': [2,4,9],
    'l2': [5,6,4,9]
} // 10407 [7,0,4,0,1]

const {l1, l2} = addTwoNums4;

const ll1: SinglyLinkedList = new SinglyLinkedList(l1);
const ll2: SinglyLinkedList = new SinglyLinkedList(l2);

utils.timed('res', addTwoNumbers, [ll1, ll2]);
