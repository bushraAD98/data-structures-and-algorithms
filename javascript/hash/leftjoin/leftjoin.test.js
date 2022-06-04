"use strict";
const Hashmap = require("../hashmap");
const leftJoin = require("./leftjoin");
let table1 = new Hashmap(50);
let table2 = new Hashmap(50);

table1.set("fond", "enamored");
table1.set("wrath", "anger");
table1.set("diligent", "employed");
table1.set("outfil", "garb");
table1.set("guide", "usher");

table2.set("fond", "averse");
table2.set("wrath", "delight");
table2.set("diligent", "idle");
table2.set("flow", "jam");
table2.set("guide", "follow");


describe('leftJoin test', () => {
    it('leftjoin teest', () => {
        expect(leftJoin(table1, table2)).toEqual([
          
            ['wrath', 'anger', 'delight'],
            ['diligent', 'employed', 'idle'],
            ['guide', 'usher', 'follow'],
            ['fond', 'enamored', 'averse'],
            ['outfil', 'garb', null] ,
        
        ]);
    });
});