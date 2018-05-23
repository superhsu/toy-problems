const util = require('util');

function Node(val) {
    this.val = val;
    this.next = null;
}

function removeDups(list) {
  let previous = list
  let current = list.next; 
  let hash = {};

  hash[previous.val] = true; 

  while (current.next !== null) {
      if (!hash[current.val]) {
          hash[current.val] = true;
          previous.next = current;
          previous = previous.next;
          current = current.next;
          if (current.next === null) {
            previous.next = current.next;
          }
      } else {
          current = current.next;
      }
    
  }
  return list;
}

let linkList = new Node(1);
let node2 = linkList.next = new Node(2);
let node3 = node2.next = new Node(3);
let node4 = node3.next = new Node(3);
let node5 = node4.next = new Node(3);
let node6 = node5.next = new Node(4);
let node7 = node6.next = new Node(4);

// console.log(linkList);
console.log(util.inspect(removeDups(linkList), {showHidden: false, depth: null}));

//1 > 2 > 3 > 3 > 3 > 4 