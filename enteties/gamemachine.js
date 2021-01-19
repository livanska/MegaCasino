class GameMachine {
    _currentMoney = Number(null);
    static counter = 0;
    _id;

    constructor (money){
        this._currentMoney = Number(money);

        this._id = GameMachine.counter++;
        console.log('Game Machine created. Money :'+ this._currentMoney + " Id: "+this._id)
    }

    getMoney = () => {return this._currentMoney}

    putMoney = (number) => {this._currentMoney += Number(number)}

    giveMoney  = (number) => {this._currentMoney >= Number(number) ? this._currentMoney -= Number(number): this._currentMoney = 0 }

    play(number) 
    {
        this.putMoney( Number(number));
        console.log('*****************\nBEFORE PLAY\nGame machine #' +this._id+' money :'+ this._currentMoney)
        let receivedMoney = 0;
        let coeficient = this.sameDigitsCount(Math.floor(Math.random() * (999 - 100 + 1) ) + 100);
       
        if (coeficient > 0){
            console.log ("Same numbers amount : "+ (coeficient+1))
            receivedMoney = Number((coeficient+1) * number)
            this.giveMoney(receivedMoney)
        }
        else{
            console.log ("No same numbers " ) 
        }
        console.log('AFTER PLAY\nGame machine #' +this._id+' money :'+ this._currentMoney+'\n*****************')
        return receivedMoney;
    }
    
    sameDigitsCount(num) {
        let digits = new Set((Array.from(String(num), Number)));
        return Number(num.toString().length - digits.size)
    }
}