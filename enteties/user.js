 class User
{
    _name;
    _money;
    constructor(name , money){
        this._name = name;
        this._money = money >= null ? money : null;
        console.log("User "+ this._name + ' created. Money :'+ this._money)
    }
    play = (number,id) => {
        if(number <= this._money) {
            console.log("User "+ this._name + ' plaing on machine #'+ id+ "   money passed: "+ number)
            let receivedMoney = casino._gameMachines[id].play(number);
            console.log("User "+ this._name + ' win ' + receivedMoney)
        }
        else
            console.log("Not enough money to play")
    }
}
class SuperAdmin extends User
{
    _casino;
    constructor(name , money){
        super(name , money);
    }

    createCasino = (name) => {   
        let casino = new Casino(name) 
        this._casino = casino
        return  this._casino
    }

    addGameMachineInCasino = (number) => {
        this._currentMoney -= Number(number)
        let machine = new GameMachine(Number(number));
        this._casino._gameMachines.push(machine);
        console.log("SuperAdmin "+ this._name + ' added new machine')
        return machine;
    }
    
    deleteGameMachine = (id) => {
        if(this._casino._gameMachines[id] == null||this._casino._gameMachines[id] == null) 
         console.log("No machine with id " +id)
        else{   
            let moneyInMachine = this._casino._gameMachines[id]._currentMoney;
            this._casino._gameMachines.splice(id,1)
            console.log("SuperAdmin "+ this._name + ' deleted machine #'+ id)
            let moneyForEveryMachine =  Math.floor((Number(moneyInMachine)/ Number(this._casino._gameMachines.length)))
            this._casino._gameMachines.forEach(e => e._currentMoney+= moneyForEveryMachine);
        }
    }

    collectMoney = (number) => {
        let receivedMoney = 0;
        this._casino._gameMachines.sort((a, b) => a._money - b._money)
        console.log("\nBEFORE GETTING MONEY")
        this._casino._gameMachines.forEach(e => { console.log(" #"+ e._id + ' money: '+e._currentMoney+ "\n")});

        for( let i = 0 ; i < this._casino._gameMachines.length; i++)
        {
            let e = this._casino._gameMachines[i]
            if(receivedMoney == number)
                break;
            if(number - receivedMoney >= e._currentMoney) {
                receivedMoney+= e._currentMoney;
                e._currentMoney =0;
            }
            else {
                let neededSum = number - receivedMoney;
                receivedMoney += neededSum;
                e._currentMoney -= neededSum;
            }
        }
        this._money += receivedMoney;
        console.log("\nAFTER GETTING MONEY")
        this._casino._gameMachines.forEach(e => { console.log(" #"+ e._id + ' money: '+e._currentMoney+ "\n")});
        return receivedMoney
    }

    putMoneyInCasino = (number) => {
        console.log("Added "+ number + ' in casino')
        this._casino._money += Number(number)
    }
    putMoneyInMachine = (number, id) => {
        this._money -= number; 
        console.log("Added "+ number + ' in machine #'+id)
        this._casino._gameMachines[id]._currentMoney += Number(number)
    }
}
