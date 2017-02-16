/**
 * Created by LDQ on 2017/2/14.
 */
class Add{
    constructor(){
        this.carry = 0;
    }

    getRemain(x){
        return x % 10;
    }
    getCarry(x){
        return parseInt(x/10);
    }

    getOneResult(x,y){
        var result = x + y + this.carry;
        var remain = this.getRemain(result);
        this.carry = this.getCarry(result);

        return remain.toString();
    }
    combineNumber(result,x){
        return result + x;
    }
    getAddend(x,i){
        var str_x = x[i] || '0';
        return parseInt(str_x);
    }

    getResult(x,y){
        var result = "";

        for(var i = x.length - 1; i >= 0; i--){
            result = this.combineNumber(
                result,
                this.getOneResult(
                    this.getAddend(x,i),
                    this.getAddend(y,i)
                )
            );

        }
        var carry = this.carry.toString();
        result += (carry == "0"?"":carry);
        return result.split("").reverse().join("");
    }
}

module.exports = Add;