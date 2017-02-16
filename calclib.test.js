/**
 * Created by LDQ on 2017/2/16.
 */
var Calclib = require('./calclib.js');

var expect = require('chai').expect;


describe('计算方法父类 测试', function() {

    it('getLen()方法测试， "123" 的长度应该是3', function() {
        expect(Calclib.getLen("123")).to.be.equal(3);
    });

    it('getOneStr2Int()方法测试，"123"中第2个值是int类型2',function(){
        expect(Calclib.getOneStr2Int("123",1)).to.be.equal(2);
    });

    it('getRemain()方法测试，9的余数是9',function(){
        expect(Calclib.getRemain(9)).to.be.equal(9);
    });
    it( 'getRemain()方法测试，10的余数是0',function(){
        expect(Calclib.getRemain(10)).to.be.equal(0);
    });
    it( 'getRemain()方法测试，11的余数是1',function(){
        expect(Calclib.getRemain(11)).to.be.equal(1);
    });
    it( 'getRemain()方法测试，23的余数是3',function(){
        expect(Calclib.getRemain(23)).to.be.equal(3);
    });

    it('getCarry()方法测试，9的进位是0,',function(){
        expect(Calclib.getCarry(9)).to.be.equal(0);
    });

    it('getCarry()方法测试，19的进位是1,',function(){
        expect(Calclib.getCarry(19)).to.be.equal(1);
    })

});