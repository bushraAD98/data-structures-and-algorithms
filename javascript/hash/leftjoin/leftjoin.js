

 function 
leftJoin(hash1, hash2) {

 let result = [];

 hash1.map.forEach(elem => {
     Object.keys(elem.head.value).forEach((key) => {
         result.push([key, hash1.get(key), hash2.get(key)]);
     });
 });
 return result;
}

module.exports = leftJoin;