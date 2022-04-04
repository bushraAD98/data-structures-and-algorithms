const brackets = require('../stack-queue-brackets/brackets');

describe('testing',()=>{

    it('testing opening case',()=>{
        let str2 = "{"
        expect(brackets(str2)).toBe(false);
    })

    it('testing closing case',()=>{
        let str3 = ")"
        expect(brackets(str3)).toBe(false);
    })

    it('testing not matching case',()=>{
        let str4 = "[({}]"
        expect(brackets(str4)).toBe(false);
    })

    it('testing empty string edge case',()=>{
        let str1 = ""
        expect(brackets(str1)).toBeNull();
    })

    it('testing non-string edge case',()=>{
        let str5 = 343434
        expect(brackets(str5)).toBe(null);
    })

    it('testing no brackets edge case',()=>{
        let str6 = '343434'
        expect(brackets(str6)).toBe(null);
    })

})