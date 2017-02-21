/**
 * Created by Angel on 2017/2/15.
 */

var Add = require('./add.js');

var expect = require('chai').expect;


describe('加法函数的测试', function() {
    it('1 加 1 应该等于 2', function() {

        var add = new Add();
        expect(add.getResult('1', '1')).to.be.equal('2');
    });
    it('0 加 1123 应该等于 1123', function() {

        var add = new Add();
        expect(add.getResult('0', '1123')).to.be.equal('1123');
    });
    it('999 加 999 应该等于 1998', function() {

        var add = new Add();
        expect(add.getResult('999', '999')).to.be.equal('1998');
    });
    it('44 加 440 应该等于 484', function() {

        var add = new Add();
        expect(add.getResult('44', '440')).to.be.equal('484');
    });
    it('440 加 44 应该等于 484', function() {

        var add = new Add();
        expect(add.getResult('440', '44')).to.be.equal('484');
    });
    it('891 加 8910 应该等于 9801', function() {

        var add = new Add();
        expect(add.getResult('891', '8910')).to.be.equal('9801');
    });
});