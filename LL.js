var LinkedList = function() {
    this.head = null;
    this.tail = null; 
};

var Node = function(value) {
    this.value = value;
    this.next = null;
}

LinkedList.prototype.makeNode = function(value) {
  var node = new Node(value); 
  return node;
}
 
LinkedList.prototype.addToTail = function(value) {
  var newNode = this.makeNode(value);
  if (this.tail === null) {
      this.head = newNode; 
      this.tail = newNode; 
  } else {
      this.tail.next = newNode; 
      this.tail = newNode;
  }
}

LinkedList.prototype.removeHead = function() {3
    var result = null;
    if (this.head === null) {
        return null; 
    } else {
        result = this.head; 
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null; 
        } else {
            this.head = this.head.next;
        }
    }
    return result.value;
}

LinkedList.prototype.contains = function(value) {
    var currentNode = this.head;

    while (currentNode !== null) {
        if (currentNode.value === value) {
            return true; 
        }

        currentNode = currentNode.next;
    }
    return false;
}

LinkedList.prototype.delete = function(val) {
    
    if (this.head.value === val) {
        this.head = this.head.next;
    } else {
        var previousNode = this.head;
        var currentNode = previousNode.next;
        while(currentNode) {
            if (currentNode.value === val) {
                previousNode.next = currentNode.next;
                currentNode = currentNode.next;
                break;
            } else {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }

}

LinkedList.prototype.reverse = function() {
  var prev = null;
  var current = this.head; 
  var next = null; 
  var lastTail = this.head;

  while(current !== null) {
      next = current.next;
      current.next = prev; 
      prev = current; 
      current = next;
  }
  this.head = prev;
  this.tail = lastTail;
  return this.head;
}

var hi = new LinkedList;
hi.addToTail(1);
hi.addToTail(2);
hi.addToTail(3);
hi.addToTail(4);
hi.delete(2);
console.log(hi);