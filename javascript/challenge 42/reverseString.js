function reverseString(str) {
    return str.split("").reverse().join("");   
}
reverseString("hello");
let str = 'hello';
console.log(reverseString(str));

function reverseString_2(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString_2('hello');

let str2 = 'bushra';
console.log(reverseString_2(str2));

function reverseString_3(str) {
    if (str === "")
      return "";
    else
      return reverseString_3(str.substr(1)) + str.charAt(0);
  }
  reverseString_3("hello");

  let str3 = 'ibrahim';
console.log(reverseString_3(str3));