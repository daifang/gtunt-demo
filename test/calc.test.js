const add = require('../calc.js');
const expect = require('chai').expect;

describe('加法函数的单元测试',function(){
    it('0 + 0 = 0',function(){
        expect(add(0,0)).to.be.equal(0);
    })

    it('1 + 3 = 4',function(){
        expect(add(1,3)).to.be.equal(4);
    })
});

