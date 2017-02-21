/**
 * Created by Angel on 2017/2/9.
 */


var Mult = require('./mult');
var expect = require('chai').expect;


describe('乘法测试',function(){
    it('1 * 1 应该等于1',function(){
        var mult = new Mult();
        expect(mult.getResult('1', '1')).to.be.equal('1');
    });
    it('22 * 2 应该等于44',function(){
        var mult = new Mult();
        expect(mult.getResult('22', '2')).to.be.equal('44');
    });
    it('44 * 4 应该等于176',function(){
        var mult = new Mult();
        expect(mult.getResult('44', '4')).to.be.equal('176');
    });

    it('22 * 22 应该等于484',function(){
        var mult = new Mult();
        expect(mult.getResult('22', '22')).to.be.equal('484');
    });
    it('99 * 9 应该等于891',function(){
        var mult = new Mult();
        expect(mult.getResult('99', '9')).to.be.equal('891');
    });
    it('43 * 36 = 1548 ',function(){
        var mult = new Mult();
        expect(mult.getResult('43', '36')).to.be.equal('1548');
    });
    it('3 * 21 = 63 ',function(){
        var mult = new Mult();
        expect(mult.getResult('3', '21')).to.be.equal('63');
    });
});