function QueueCirc(len){
  this.size = len;
  this.data = new Uint8Array(len);
  this.count = 0;
  this.head = 0;
  this.tail = 0;
}

QueueCirc.prototype.enqueue = function (val){
  if (val >= 0 && val <= 255 && this.count !== this.size){
    this.data[this.tail] = val;
    if (this.tail !== this.size - 1) {
      this.tail++;
    }
    else {
      this.tail = 0;
    }
    this.count++;
  } else {
    throw 'error';
  }
}

QueueCirc.prototype.dequeue = function () {
  if (this.count === 0) {
    throw 'error';
  }
  var temp = this.data[this.head];
  this.data[this.head] = 0;
  this.count--;
  if (this.head + 1 >= this.size) {
    this.head = 0;
  } else {
    this.head = this.head + 1;
  }
  return temp;
}
