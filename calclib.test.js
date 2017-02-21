/**
 * Created by LDQ on 2017/2/16.
 */
var Calclib = require('./calclib.js');

var expect = require('chai').expect;


describe('计算方法父类 测试', function() {

    it('getLen()方法测试， "123" 的长度应该是3', function() {
        var c = new Calclib();
        expect(c.getLen("123")).to.be.equal(3);
    });

    it('getOneStr2Int()方法测试，"123"中第2个值是int类型2',function(){
        var c = new Calclib();
        expect(c.getOneStr2Int("123",1)).to.be.equal(2);
    });

    it('getRemain()方法测试，9的余数是9',function(){
        var c = new Calclib();
        expect(c.getRemain(9)).to.be.equal(9);
    });
    it( 'getRemain()方法测试，10的余数是0',function(){
        var c = new Calclib();
        expect(c.getRemain(10)).to.be.equal(0);
    });
    it( 'getRemain()方法测试，11的余数是1',function(){
        var c = new Calclib();
        expect(c.getRemain(11)).to.be.equal(1);
    });
    it( 'getRemain()方法测试，23的余数是3',function(){
        var c = new Calclib();
        expect(c.getRemain(23)).to.be.equal(3);
    });
    it('123 第零次 应该是123',function(){
        var c = new Calclib();
        expect(c.paddingZero('123',0)).to.be.equal('123');
    });
    it('getCarry()方法测试，9的进位是0,',function(){
        var c = new Calclib();
        expect(c.getCarry(9)).to.be.equal(0);
    });

    it('getCarry()方法测试，19的进位是1,',function(){
        var c = new Calclib();
        expect(c.getCarry(19)).to.be.equal(1);
    })

    it('"123","321" 应该返回"123,321"',function(){
        var c = new Calclib();
        expect(c.exchangeSite('123','321')).to.be.deep.equal(['123',"321"]);
    })
    it('"44","440" 应该返回"440,44"',function(){
        var c = new Calclib();
        expect(c.exchangeSite('44','440')).to.be.deep.equal(['440',"44"]);
    })
    it('"123","3211" 应该返回"3211,123"',function(){
        var c = new Calclib();
        expect(c.exchangeSite('123','3211')).to.be.deep.equal(['3211',"123"]);
    })

});