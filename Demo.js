var u1;
var casino;
var gameMachine ;

function startDemo()
{
     u1 = new User("Liliia", 300)
     u2 = new SuperAdmin("Admin", 2000)
     casino = u2.createCasino("Monako")
     u2.addGameMachineInCasino(1000)
     u2.addGameMachineInCasino(500)
    
}
function play()
{
    u1.play(50,0);
    
}
function collectMoney() 
{
    u2.collectMoney(500)
}
function putMoney () {
    u2.putMoneyInMachine(200, 0)
}
function deleteMachine () {
    u2.deleteGameMachine(1);
}