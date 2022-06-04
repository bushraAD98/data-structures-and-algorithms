'use strict';

const HashMap = require('../hashmap');
const BinaryTree = require('../trees/binary-tree');
const Node = require('../trees/node');
describe("creating an element from hashmap", () => {
    let hashmap;
    beforeAll(() => {

      hashmap = new HashMap(15);
      hashmap.set("Bushra", "Instructor");
      hashmap.set("Osama", "Learner");
      hashmap.set("Ahmad", "TA");
    });

    it('creating a hashmap', () => {
        const hashmap = new HashMap(10);
        expect(hashmap).toBeInstanceOf(HashMap);
    });

    it("Adding a key/value to your hashtable results in the value being in the data structure", () => {

        const hash1 = hashmap.hash("Bushra");
        const hash2 = hashmap.hash("Osama");
        const hash3 = hashmap.hash("Ahmad");
        expect(hashmap.map[hash1].head.value).toEqual({ Bushra: "Instructor" });
        expect(hashmap.map[hash2].head.value).toEqual({ Osama: "Learner" });
        expect(hashmap.map[hash3].head.value).toEqual({ Ahmad: "TA" });
        expect(hashmap.map[hash3].head.value["Ahmad"]).toEqual("TA");
      });

      it("Retrieving based on a key returns the value stored", () => {
        expect(hashmap.get("Bushra")).toBe("Instructor");
        expect(hashmap.get("Osama")).toEqual("Learner");
        expect(hashmap.get("Ahmad")).toEqual("TA");
      });
    
      it("Successfully returns null for a key that does not exist in the hashtable", () => {
        const hashmap02 = new HashMap(5);
        expect(hashmap02.get('lara')).toBe(null);
      });

       it("4.Successfully handle a collision within the hashtable", () => {

    const collisionHash = new HashMap(1);
   collisionHash.set('Ibrahim','Officer');
   collisionHash.set('Bushra','programmer');
   expect(collisionHash.get('Ibrahim')).toEqual('Officer');
   expect(collisionHash.get('Bushra')).toEqual('programmer');

});

it("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
    hashmap.set("Ibrahim", "Officer");

    expect(hashmap.get("Bushra")).toEqual("Instructor");
    expect(hashmap.get("Ibrahim")).toEqual("Officer");
  });



  it("Successfully hash a key to an in-range value", () => {
    const hashINRange = hashmap.hash("bushra");

    expect(hashINRange).toBeLessThan(hashmap.map.length);
    expect(hashINRange).toBeLessThan(15);
  });
  it("Successfully test the hash if it contains a key or not", () => {
    expect(hashmap.contains("Bushra")).toBeTruthy();
    expect(hashmap.contains("test")).toBe(false);
  });

  });




  describe("FIRST REPEATED WORD TESTS", () => {
 
    it("1.successfuly return the first repeated word in a book", () => {
      let hashTable = new HashMap(5000);
  
      let string = "Once upon a time, there was a brave princess who...";
      expect(hashTable.repeatedWord(string)).toEqual("a");
    });
  
    it("2.successfuly return the first repeated word in a book", () => {
      let hashTable = new HashMap(5000);
  
      let string =
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
      expect(hashTable.repeatedWord(string)).toEqual("it");
    });
  
    it("3.successfuly return the first repeated word in a book", () => {
      let hashTable = new HashMap(5000);
  
      let string =
        "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
      expect(hashTable.repeatedWord(string)).toEqual("summer");
    });
    it("unique character method test", () => {
      let hashTable = new HashMap(5000);
  
      let string = "The quick brown fox jumps over the lazy dog";
      expect(hashTable.uniqueCharacters(string)).toEqual(false);
    });
  });


