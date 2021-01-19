 class Casino
{
    _name;
    _gameMachines;
    _money;
    constructor(name){
        this._name = name;
        this._gameMachines=[];
        this._money = 0;
        console.log("Casino "+ this._name + ' created.')
    }

    addMachine = (gameMachine) => this._gameMachines.add(gameMachine);

    getMoney = () => {

        let currentCasinoMoney = 0; 
        this._gameMachines.forEach(machine => {
            currentCasinoMoney += Number(machine.currentMoney);
        })
        console.log("Casino "+ this._name + ' money: '+this._money)
        return currentCasinoMoney;
    };

    getMachineCount = () => {
        console.log("Casino "+ this._name + ' machines number : ' +this._gameMachines.size())
         return Number(this._gameMachines.size())}
    }
   