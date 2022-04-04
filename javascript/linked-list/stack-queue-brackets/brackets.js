const Stack = require('../stack');
function balancedBrackets(str) {
    const stack = new Stack();

    if (str == "" || typeof str !== "string") {
        return null;
    }


    let result = str.split('');

    if (!result.includes('(') && !result.includes(')') && !result.includes('{') &&
        !result.includes('}') && !result.includes('[') && !result.includes(']')) return null;

    result.map((element) => {

        if (element == '(' || element == '{' || element == '[') {
            stack.push(element);

        } else if (element == ')' && stack.peak() == '(') {
            stack.pop();
        }
        else if (element == '}' && stack.peak() == '{') {
            stack.pop();
        }
        else if (element == ']' && stack.peak() == '[') {
            stack.pop();
        }

        else if (element == ']' || element == '}' || element == ')') {
            stack.push(element);
        }

    })

    if (stack.isEmpty())
        return true;
    else
        return false;

}


module.exports = balancedBrackets;