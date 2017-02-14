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
        var xLen = this.getLen(x);
        var yLen = this.getLen(y);

        for(var j = yLen;j >=0;j--){
            var time = 0;

            for(var i = xLen;i >=0 ;i--){
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
            result = add(result,addend);
            time++;
        }
        return result;
        // this.carry = this.carry.toString();
        // result = result + this.carry;
        // result = result.split('').reverse().join("");
        // return result;
    }

}