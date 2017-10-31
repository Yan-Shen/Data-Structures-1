// function Queue() {
//   this.queue = [];
//   this.tail = null;
//   this.head = null;
//   this.count = 0;
// }

// Queue.prototype.enqueue = function(val) {
//   this.queue[this.count] = val;
//   this.count++;
// }

// Queue.prototype.dequeue = function() {
//   if(this.count === 0)
//       return undefined;
//   var n_queue = [];
//   var removed = this.queue[0];
//   for(var i = 1; i < this.count; i++) {
//       n_queue[i - 1] = this.queue[i];
//   }
//   this.queue = n_queue;
//   this.count--;
//   return removed;
// }

// Queue.prototype.size = function() {
//   return this.count;
// }

/////////////////////////////////////////////////////////
function Queue(){
  this.length = 0;
  this.que = [];
}

Queue.prototype.enqueue = function (val){
  this.que[this.length]= val;
  this.length++;
}

// remove first element;
// reduce size;
Queue.prototype.dequeue = function (){
  let newQue = [];
  let firstElement = this.que[0];
  for (let i=1; i<this.length; i++){
    newQue[i-1]= this.que[i];
  }
  this.que = newQue;
  this.length <= 0 ? this.length = 0: this.length--;
  return firstElement;
}

Queue.prototype.size = function (){
  return this.length;
  }
