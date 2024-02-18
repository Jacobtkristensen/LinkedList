"use strict";

const node1 = {
    prev: null,
    next: null,
    data: "A"
}
const node2 = {
    prev: null,
    next: null,
    data: "B"
}
const node3 = {
    prev: null,
    next: null,
    data: "C"
}
const node4 = {
    prev: null,
    next: null,
    data: "D"
}
const node5 = {
    prev: null,
    next: null,
    data: "E"
}
node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

class LinkedList {
    constructor() {
        this.head= node1
        this.tail= node3
    }

     dumpList() {
        let a_node = this.head;
        while (a_node != null) {
            console.log(`
            node : ${a_node.data}
            ---------------
             prev: ${a_node.prev?.data}
             next: ${a_node.next?.data}
            `);
            a_node = a_node.next;
        }
    }
   // add node to the end of the list
    addLast(payload) {
        const newNode = {
            prev: this.tail,
            next: null,
            data: payload
        };
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }
    // add node to the start of the list
    addFirst(payload) {
        const newNode = {
            prev: null,
            next: this.head,
            data: payload
        }
        if (!this.head) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    // remove node from the end of the list
    removeLast() {
        if (this.tail) {
            if (this.tail.prev) {
                this.tail = this.tail.prev;
                this.tail.next = null;
            } else {
                //if only one node in the list
                this.head = null;
                this.tail = null;
            }
        }
    }
    
    // remove node from the start of the list
    removeFirst() {
        if (this.head) {
            if (this.head.next) {
                this.head = this.head.next;
                this.head.prev = null;
            } else {
                //if only one node in the list
                this.head = null;
                this.tail = null;
            }
        }
    }

    // remove node from the list
    removeNode(node) {
        if (node === this.head){
            this.removeFirst();
        }
        else if (node === this.tail){
            this.removeLast();
        }
        else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }

    }
    // insert node before a given node
    insertBeforeNode(existingNode, payload) {
        if (!existingNode) {
            console.log("Node not found");
            return;
        }
        const newNode = {
            prev: null,
            next: null,
            data: payload
        };
        // if existing node is the first node, use addFirst method
        if(this.head === existingNode) {
            this.addFirst(payload);
            return;
        }  else {
        newNode.prev = existingNode.prev;
        newNode.next = existingNode;
        existingNode.prev.next = newNode;
        existingNode.prev = newNode;
        }
    }
    // insert node after a given node
    insertAfterNode(existingNode, payload) {
        if (!existingNode) {
            console.log("Node not found");
            return;
        }
        const newNode = {
            prev: null,
            next: null,
            data: payload
        };
         // if existing node is the last node, use addLast method 
        if (this.tail === existingNode) {
            this.addLast(payload);
            return;
        } else { // if existing node is between two nodes 
            newNode.prev = existingNode;
            newNode.next = existingNode.next;
            existingNode.next.prev = newNode;
            existingNode.next = newNode;
        }
    }

}
const ll = new LinkedList();
console.log(11)

// addLast(node) {

//     node.prev = this.tail;
//     this.tail.next = node;
//     this.tail = node;


// }

// add(payload) {
//     const newNode = {
//         prev: null,
//         next: null,
//         data: payload
//     };
//     this.addLast(newNode);
// }
// addFirst(payload) {

// }

    // clear() {

    // }

    // get(index) {

    // }

    // indexOf(payload) {

    // }

    // insertAfter(index, payload) {

    // }

    // insertBefore(index, payload) {

    // }

    // first() {

    // }

    // last() {

    // }

    // remove(index) {

    // }

  
    // insertAfterNode(payload, existingNode) {

    // }

    // insertBeforeNode(payload, existingNode) {

    // }

    // nodeAt(index) {

    // }

    // swapNodes(nodeA, nodeB) {

    // }

   