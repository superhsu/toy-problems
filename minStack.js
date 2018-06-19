let MinStack = function() {
    this.stack = [];
}

MinStack.prototype.push = function(x) {
    let min = this.stack.length > 0 ? this.stack[this.stack.length - 1].min : x;
    this.stack.push({
        val: x,
        min: Math.min(min, x)
    })
}

MinStack.prototype.pop = function() {
    let x = this.stack.pop();
    return x ? x.val : null; 
}

MinStack.prototype.top = function() {
    if (this.stack.length === 0) {
        return null;
    }

    return this.stack[this.stack.length - 1].val;
}

MinStack.prototype.getMin = function() {
    if (this.stack.length === 0) {
        return null;
    }
    return this.stack[this.stack.length - 1].min;
}