/**
 * Created by Angel on 2017/2/9.
 */

/*
 *   乘法
 *   @param
 *
 *
 */

// var Add = require('./add.js');

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

        var product =  x * y;

        var remain = this.getRemain(product);
        remain += this.carry;
        this.carry = this.getCarry(product);
        return remain.toString();
    }
    getLen(x){
        return x.length;
    }
    combineNumber(result,x){
        return result + x;
    }
    reversalStr(x){
        return x.split("").reverse().join("");
    }

    paddingZero(x,time){
        var str = "";
        for(var i = 0;i < time ;i++){
            i+='0';
        }
        return x + i;
    }

    getResult(x,y){
        var result = "";
        var xStart = this.getLen(x) - 1;
        var yStart = this.getLen(y) - 1;

        for(var j = yStart;j >=0;j--){
            var time = 0;

            for(var i = xStart;i >=0 ;i--){
                result = this.combineNumber(
                    result,
                    this.getOneResult(
                        this.getMult(x,i),
                        this.getMult(y,j)
                    )
                );

                var carry = this.carry.toString();
                result += (carry == "0"?"":carry);
                var addend = result.split('').reverse().join("");
                addend = this.paddingZero(result,time);
            }
            var add = new Add();
            result = add.getResult(result,addend);
            time++;
        }
        return result;
        // this.carry = this.carry.toString();
        // result = result + this.carry;
        // result = result.split('').reverse().join("");
        // return result;
    }

}