const Node = require("../linked-list/node");
const LinkedList = require("../linked-list/index");

class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    return (
      (key.split("").reduce((acc, char) => {
        return acc + char.charCodeAt();
      }, 0) *
        599) %
      this.size
    );
  }

  set(key, value) {
    let hashIdx = this.hash(key);
    console.log({hashIdx});
    // this condition if the array is empty
    if (!this.map[hashIdx]) {
      this.map[hashIdx] = new LinkedList();
    }
    let entryData = { [key]: value };
    this.map[hashIdx].append(entryData);
  }

  get(key) {
    const hash = this.hash(key);
    if (this.map[hash]) {
      let currentNode = this.map[hash].head;
      while (currentNode) {
        if (currentNode.value[key]) {
          return currentNode.value[key];
        }
        currentNode = currentNode.next;
      }
    } else {
      return null;
    }
  }

  contains(key) {
    const idx = this.hash(key);
    if (!this.map[idx]) {
      return false;
    }
    let curr = this.map[idx].head;
    while (curr) {
      if (curr.value[key]) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i]) {
        let pointer = this.map[i].head;
        keys.push(Object.keys(pointer.value)[0]);
      }
    }
    return keys;
  }



  repeatedWord(string) {
    const arr = string.split(/[ ,]+/);
    let key;
    let hash;
    for (let i = 0; i < arr.length; i++) {
      key = arr[i].toLowerCase();
      this.set(key, "noValue");
      hash = this.hash(key);
      if (this.map[hash].head.next) {
        return key;
      }
    }
  }


}

module.exports = HashMap;

const hashmap01 = new HashMap(10);
hashmap01.set("Razan", "Instructor");
hashmap01.set("Batool", "TA");
hashmap01.set("Mohammad", "Learner");
hashmap01.set("Salam", "Learner");
hashmap01.set("Bushra", "Learner");
hashmap01.get("Razan");
hashmap01.set("Ibrahim", "Instructor");
console.log(hashmap01.contains('Salam'));
console.log(hashmap01);
console.log(hashmap01.map[17]);
console.log(hashmap01.map[16]);
console.log(hashmap01.map[21]);
console.log(hashmap01.map[6]);
console.log(hashmap01.map[12]);
console.log(hashmap01.keys());
// console.log('+++++++',hashmap01.get('Bushra'));
// console.log(hashmap01.contains('fff'));
