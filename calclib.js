/**
 * Created by LDQ on 2017/2/16.
 */
class Calclib{
    static getLen(x){
        return x.length;
    }

    static getOneStr2Int(x,i){
        let str_x = x[i] || '0';
        return parseInt(str_x);
    }
    static getRemain(x){
        return x % 10;
    }
    static getCarry(x){
        return parseInt(x/10);
    }
}

module.exports = Calclib;