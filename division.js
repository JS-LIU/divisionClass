/**
 * Created by Angel on 2017/2/7.
 */
/*
 *   @param a --- 除数
 *   @param b --- 被除数
 */

class Division{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    //  得到 一位商
    getOneResult(x,y){
        for(let i  = 0; i< 10;i++){
            let mult = new Mult(x,i);
            let result = mult.getResult();
            if(result > y){
                return i-1;
            }
        }
    }
}




function division(a,b){
    let result = "";

    for(let i = 0 ;i < 10;i++){

    }

    return result;
}

module.exports = division;

