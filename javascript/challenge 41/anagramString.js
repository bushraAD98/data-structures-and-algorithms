


const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let count1 = {};
  let count2 = {};
  let length = str1.length;

  for (let i = 0; i < length; i++) {
    if (!count1[str1[i]]) count1[str1[i]] = 0;
    if (!count2[str2[i]]) count2[str2[i]] = 0;

    count1[str1[i]]++;
    count2[str2[i]]++;
  }
  for (let char in count1) {
    if (count1[char] !== count2[char]) return false;
  }

  return true;
};

let str1 = "caat",
  str2 = "taca";

console.log(isAnagram(str1, str2));
