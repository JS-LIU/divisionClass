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
});