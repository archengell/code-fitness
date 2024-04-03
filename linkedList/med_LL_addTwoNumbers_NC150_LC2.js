"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils = require("../utils");
const LinkedList = require("./a_linkedListNodeClasses");
const med_LL_singlyLinkedListConst_Gen_1 = require("./med_LL_singlyLinkedListConst_Gen");
/**
 *
 * @param l1
 * @param l2
 * @returns
 */
function addTwoNumbers(l1, l2) {
    let res = null;
    let cache1 = [];
    let cache2 = [];
    // parse LL to array -> o(n) time / o(n) space
    let h1 = l1['head'];
    let h2 = l2['head'];
    while (h1) {
        cache1.push(h1.value);
        h1 = h1.next;
    }
    while (h2) {
        cache2.push(h2.value);
        h2 = h2.next;
    }
    // parse each array into number than add
    let sum = parseInt(cache1.reverse().join('')) + parseInt(cache2.reverse().join(''));
    // parse sum into number array in reverse -> o(n) time
    let sumArr = Array.from(String(sum), Number).reverse();
    console.log(sumArr);
    const _arrToLinkedList = (arr) => {
        let precursor = new LinkedList.SLL_Node(0);
        let curr = precursor;
        arr.map((item) => {
            curr.next = new LinkedList.SLL_Node(item);
            curr = curr.next;
        });
        return precursor.next;
    };
    // parse sum array into linked list -> o(n) time
    res = _arrToLinkedList(sumArr);
    return res;
}
;
let addTwoNums1 = {
    'l1': [2, 4, 3],
    'l2': [5, 6, 4]
}; // 807 [7,0,8]
let addTwoNums2 = {
    'l1': [0],
    'l2': [0]
}; // 0 [0]
let addTwoNums3 = {
    'l1': [9, 9, 9, 9, 9, 9, 9],
    'l2': [9, 9, 9, 9]
}; // 10009998 [8,9,9,9,0,0,0,1]
let addTwoNums4 = {
    'l1': [2, 4, 9],
    'l2': [5, 6, 4, 9]
}; // 10407 [7,0,4,0,1]
const { l1, l2 } = addTwoNums4;
const ll1 = new med_LL_singlyLinkedListConst_Gen_1.SinglyLinkedList(l1);
const ll2 = new med_LL_singlyLinkedListConst_Gen_1.SinglyLinkedList(l2);
utils.timed('res', addTwoNumbers, [ll1, ll2]);
