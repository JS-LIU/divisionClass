/**
 * Created by Angel on 2017/2/9.
 */

/*
 *   乘法
 *   @param
 *
 *
 */

var Calclib = require('./calclib');
var Add = require('./add');

class Mult extends Calclib{
    constructor(){
        super();
        this.carry = 0;
    }

    getOneResult(x,y){

        let product =  x * y;

        let remain = super.getRemain(product);
        remain += this.carry;
        this.carry = super.getCarry(product);
        return remain.toString();
    }

    getResult(x,y){
        let lastResult = "0";
        let yStart = super.getLen(y) - 1;
        let xStart = super.getLen(x) - 1;
        let add = new Add();
        let time = 0;
        for(let j = yStart;j >=0;j--){
            let addend = "0";
            let preResult = "";
            let myY = super.getOneStr2Int(y,j);
            for(let i = xStart;i >=0 ;i--){
                let myX = super.getOneStr2Int(x,i);
                let oneR = this.getOneResult(myX, myY);
                preResult = super.combineNumber(
                    oneR,
                    preResult
                );
            }
            let carry = this.carry.toString();
            preResult = ((carry === "0"?"":carry) + preResult);
            this.carry = 0;
            addend = super.paddingZero(preResult,time);
            lastResult = add.getResult(lastResult,addend);
            time++;
        }
        return lastResult;
    }

}

module.exports = Mult;