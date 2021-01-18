export class User
{
    _name;
    _money;
    constructor(name , money){
        this._name = name;
        this._money = money >= null ? money : null;
    }
}