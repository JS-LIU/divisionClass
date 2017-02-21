/**
 * Created by LDQ on 2017/2/16.
 */
class Calclib{
    getLen(x){
        return x.length;
    }

    getOneStr2Int(x,i){
        let str_x = x[i] || '0';
        return parseInt(str_x);
    }
    getRemain(x){
        return x % 10;
    }
    getCarry(x){
        return parseInt(x/10);
    }
    combineNumber(result,x){
        return result + x;
    }
    paddingZero(x,time){
        let str = "";
        for(let i = 0;i < time ;i++){
            str+='0';
        }
        return x + str;
    }

    exchangeSite(x,y){
        let a = (x.length >= y.length?x : y);
        let b = (a === x ? y : x);
        return [a,b];
    }
    reversalStr(x){
        return x.split("").reverse().join("");
    }
}

module.exports = Calclib;