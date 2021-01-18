class GameMachine {
    _currentMoney = Number(null);

    constructor (money){
        this._currentMoney = Number(money);
        console.log('Game Machine created. Money :'+ this._currentMoney)
    }

    getMoney = () => {return this._currentMoney}

    putMoney = (number) => {this._currentMoney += Number(number)}

    giveMoney  = (number) => {this._currentMoney >= Number(number) ? this._currentMoney -= Number(number): this._currentMoney = null }

    play(number) 
    {
        this.putMoney(number);
        console.log('Game Machine Money :'+ this._currentMoney)
    
        let coeficient = this.sameDigitsCount(Math.floor(Math.random() * (999 - 100 + 1) ) + 100);
        console.log ("Coeficient : " + coeficient)
        if (coeficient > 0){
            this.giveMoney((coeficient+1) * number)
        }
        console.log('Game Machine Money :'+ this._currentMoney)
    }
    
    sameDigitsCount(num) {
        let digits = new Set((Array.from(String(num), Number)));
        return Number(num.toString().length - digits.size)
    }
}