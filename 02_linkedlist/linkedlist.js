// function LinkedList(){
//  this.head = false;
//  this.tail = false;
// }


// LinkedList.prototype.addToHead = function (val){
//   if (!this.head){
//     this.tail = new Node(val);
//     this.head = this.tail;
//   } else {
//     var temp = new Node(val);
//     this.head.previous = temp;
//     temp.next = this.head;
//     this.head = temp;
//   }
// }

// LinkedList.prototype.addToTail = function (val){
//   if (!this.head){
//     this.tail = new Node(val);
//     this.head = this.tail;
//   } else {
//     var temp = new Node(val);
//     this.tail.next = temp;
//     temp.previous = this.tail;
//     this.tail = temp;
//   }
// }

// LinkedList.prototype.removeHead = function (){
//   if (!this.head){
//     return false;
//   } else {
//     if (this.head.next) {
//       var temp = this.head.value;
//       this.head = this.head.next;
//       this.head.previous = null;
//       return temp;
//     } else {
//       var temp = this.head.value;
//       this.head = false;
//       this.tail = false;
//       return temp;
//     }

//   }
// }

// LinkedList.prototype.search = function (val){
//   let temp = this.head;
//  while (temp){
//    if(temp.value === val) {
//      return val;
//    }
//    else if (typeof val === 'function' && val(temp.value)) {
//     return temp.value;
//   } else {
//      temp = temp.next;
//    }
//  }
//  return null;
// }


// LinkedList.prototype.removeTail = function() {
//   if (!this.tail){
//     return false;
//   } else {
//     if (this.tail.previous) {
//       var temp = this.tail.value;
//       this.tail = this.tail.previous;
//       this.tail.next = null;
//       return temp;
//     } else {
//       var temp = this.tail.value;
//       this.head = false;
//       this.tail = false;
//       return temp;
//     }
//   }
// }

// function Node(val, next = null, pre = null){
//   this.value = val;
//   this.next = next;
//   this.previous = pre;
// }

////////////////////////////////////////////////////////////////////////////
// LinkedList has three methods to change the state of the list
// LinkedList inital state is head and tail null
// LinkedList is made of Node
// each node holds value, next and previous

// When there is only one node, head and tail the same
// addTail: head.next point to the new Node

function LinkedList(){
  this.head = null;
  this.tail = null;

}

// if empty both head and tail the same node
// else tail = new node
// head.next = this.tail;
LinkedList.prototype.addToTail = function(val){
  if (!this.head){
    this.head = new Node(val);
    this.tail = this.head;

  } else {
    let temp = this.tail;
    this.tail.next = new Node(val);
    this.tail = this.tail.next;
    this.tail.previous = temp;
  }
}

LinkedList.prototype.addToHead = function(val){
  if (!this.head){
    this.head = new Node(val);
    this.tail = this.head;
  } else {
    let temp = this.head;
    this.head.previous = new Node(val);
    this.head = this.head.previous;
    this.head.next = temp;
  }

}

// if emplty return false;
// else remove head
// return removed head
LinkedList.prototype.removeHead = function(){
  if (!this.head){
    return false;
  } else if (this.head.next) {

   let temp = this.head;
    this.head = this.head.next;
    this.head.previous = null;
    return temp.value;
  } else {
    let temp = this.head;
    this.head = null;
    this.tail = null;
    return temp.value;
  }
}

LinkedList.prototype.removeTail = function(){
  if (!this.tail){
    return false;
  } else if (this.tail.previous){

   let temp = this.tail;
    this.tail = this.tail.previous;
    this.tail.next = null;
    return temp.value;
  } else {
    let temp = this.tail;
    this.head = null;
    this.tail = null;
    return temp.value;
  }
}

LinkedList.prototype.search = function(val){

  let current = this.head;
  while (current) {

    if (current.value === val ) {
      return val;
    } else if (typeof val === 'function' && val(current.value)){
      return current.value;
    }
    current = current.next;
  }
    return null;
}

function Node(val){
  this.value = val;
  this.next = null;
  this.previous = null;
}
