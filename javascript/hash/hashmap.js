'use strict'

const LinkedList = require ('../linked-list/index.js');

class HashMap {
    constructor(size){
        this.size = size;
        this.table = new Array(size);

    }
    hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.size;
        }
        return hash;
    }
    set(key, value){
        let index = this.hash(key);
        if(!this.table[index]){
            this.table[index] = new LinkedList();
        }
        let entryData = {[key]: value};
        this.table[index].append(entryData);
    }
  
    get(key){
        const index = this.hash(key);
        if(!this.table[index]){
          return null;
        }
        let current = this.table[index].head;
        while(current){
          if(current.value[key]){
            return current.value[key];
          }
          current = current.next;
        }
        return null;
      }
        
      keys(){
        let keys = [];
        for(let i = 0; i < this.table.length; i++){
          if(this.table[i]){
            let current = this.table[i].head;
            while(current){
              keys.push(Object.keys(current.value)[0]);
              current = current.next;
            }
          }
        }
        return keys;
      }
      
    contains(key){
        const index = this.hash(key);
        if(!this.table[index]){
          return false;
        }
        let current = this.table[index].head;
        while(current){
          if(current.value[key]){
            return true;
          }
          current = current.next;
        }
        return false;
      }

       repeatedWord(str){
        const hash = new hashTable(10);
        const arr = str.split(/[, ]+/);
        let result = '';
        for(let i = 0; i < arr.length; i++){
          if(!hash.contains(arr[i])){
            hash.set(arr[i], 1);
          }else{
            result = arr[i];
            break;
          }
        }
        return result;
      }
}



module.exports = HashMap;

// const hashmap01 = new HashMap(10);
// hashmap01.set("Razan", "Instructor");
// hashmap01.set("Batool", "TA");
// hashmap01.set("Mohammad", "Learner");
// hashmap01.set("Salam", "Learner");
// hashmap01.set("Bushra", "Learner");
// hashmap01.get("Razan");
// hashmap01.set("Ibrahim", "Instructor");
// console.log(hashmap01.contains('Salam'));
// console.log(hashmap01);
// console.log(hashmap01.map[17]);
// console.log(hashmap01.map[16]);
// console.log(hashmap01.map[21]);
// console.log(hashmap01.map[6]);
// console.log(hashmap01.map[12]);
// console.log(hashmap01.keys());
// console.log('+++++++',hashmap01.get('Bushra'));
// console.log(hashmap01.contains('fff'));
