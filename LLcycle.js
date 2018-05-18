function Node(value) {
    this.value = value; 
    this.next = null;
}

function loop (linkedList) {
  let obj = {}; 
  let node = linkedList; 
  
  while (node.next !== null) {
      if (obj[node.value] !== node) {
        obj[node.value] = node;
        node = node.next;
      } else {
          return true; 
      }
  }
  return false; 
}

let nodeA = new Node('A');
let nodeB = nodeA.next = new Node('B');


console.log(nodeB);
