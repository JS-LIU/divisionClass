/**
 * Created by LDQ on 2017/2/14.
 */

var Calclib = require('./calclib.js');

class Add extends Calclib{
    constructor(){
        super();
        this.carry = 0;
    }

    getOneResult(x,y){
        let result = x + y + this.carry;
        let remain = super.getRemain(result);
        this.carry = super.getCarry(result);
        return remain.toString();
    }

    getResult(x,y){
        let result = "";
        const [a,b] = super.exchangeSite(x,y);
        let bStart = b.length - 1;

        for(let i = a.length - 1; i >= 0; i--){

            result = super.combineNumber(
                this.getOneResult(
                    super.getOneStr2Int(a,i),
                    super.getOneStr2Int(b,bStart)
                ),
                result
            );
            bStart--;
        }

        let carry = this.carry.toString();
        result = ((carry === "0"?"":carry) + result);
        return result;
    }
}

module.exports = Add;