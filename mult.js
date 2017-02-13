/**
 * Created by Angel on 2017/2/9.
 */

/*
 *   乘法
 *   @param
 *
 *
 */



class Mult{
    constructor(){
        this.carry = 0;
    }

    //  乘数
    getMult(x,i){
        return parseInt(x[i]);
    }

    //  取余（）
    getRemain(x){
        return x % 10;
    }

    //  取进位
    getCarry(x){
        return parseInt(x / 10);
    }

    getOneResult(x,y){
        var mult = this.getMult(x,i);

        var multed = this.getMulted(y,i);

        var product =  mult * multed;

        var remain = this.getRemain(product);
        remain += this.carry;
        this.carry = this.getCarry(product);
        return remain.toString();
    }
    getLen(x){
        return x.length;
    }
    getResult(x,y){
        var result = "";
        var xLen = this.getLen(x);
        var yLen = this.getLen(y);
        for(var i = xLen;i >=0 ;i--){
            this.getOneResult(getMult(x,i),getMult(y,yLen));

        }
        // this.carry = this.carry.toString();
        // result = result + this.carry;
        // result = result.split('').reverse().join("");
        // return result;
    }

}