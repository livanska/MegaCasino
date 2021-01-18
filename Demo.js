var u1;
var casino;
var gameMachine ;

function startDemo()
{
     u1 = new User("Liliia")
    casino = new Casino("Casino")
     gameMachine = new GameMachine(600);
    
}
function play()
{
    gameMachine.play(50);
}