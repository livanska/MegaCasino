 class User
{
    _name;
    _money;
    constructor(name , money){
        this._name = name;
        this._money = money >= null ? money : null;
        console.log("user "+ this._name + ' created. Money :'+ this._money)
    }
}