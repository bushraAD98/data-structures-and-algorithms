'use strict';

const HashMap = require('../hashmap');

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
    const hashINRange = hashmap.hash("ahmad");

    expect(hashINRange).toBeLessThan(hashmap.map.length);
    expect(hashINRange).toBeLessThan(15);
  });
  it("Successfully test the hash if it contains a key or not", () => {
    expect(hashmap.contains("Bushra")).toBeTruthy();
    expect(hashmap.contains("test")).toBe(false);
  });

  });
