 class Casino
{
    _name;
    _gameMachines;
    constructor(name){
        this._name = name;
        this._gameMachines = new Set;
        console.log("Casino "+ this._name + ' created.')
    }

    addMachine = (gameMachine) => this._gameMachines.add(gameMachine);

    getMoney = () => {
        let currentCasinoMoney = Number(null); 
        this._gameMachines.array.forEach(machine => {
            currentCasinoMoney += Number(machine.currentMoney);
        })
        return currentCasinoMoney;
    };

    getMachineCount = () => {return Number(this._gameMachines.size())};
}