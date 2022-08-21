# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def removeElements(head: Optional[ListNode], val: int) -> Optional[ListNode]:
    tmp = head
    while tmp:
        if tmp.next and tmp.next.val == val:
            tmp.next = tmp.next.next
        else:
            tmp = tmp.next
    # edge case if the head === value for removal of node       
    return head if head is not None or head.val != val else head.next


        
head = [1,2,6,3,4,5,6]
val = 6
head1 = []
val1 = 1
head2 = [7,7,7,7]
val2 = 7