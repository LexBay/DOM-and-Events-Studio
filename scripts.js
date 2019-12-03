// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function(){

    let goFly = document.getElementById("takeoff");
    let land = document.getElementById("landing");
    let abort = this.document.getElementById("missionAbort");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let right = document.getElementById("right");
    let left = document.getElementById("left");
    let status = document.getElementById("flightStatus");
    let background = document.getElementById("shuttleBackground");
    let height = document.getElementById("spaceShuttleHeight");
    let rocket = document.getElementById("shuttleBackground");


    goFly.addEventListener("click", function(){
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response){
            status.innerHTML = "Shuttle in flight";
            background.style.backgroundColor = "blue";
            height.innerHTML = 10000;
        }
    });

    land.addEventListener("click", function(){
        let input = window.confirm("The shuttle is landing ");
        if(input) {
            status.innerHTML = "The shuttle has landed.";
            background.style.backgroundColor = "green";
            height.innerHTML = 0;
        } 
    });

    abort.addEventListener("click", function(){
        let alert = window.confirm("Confirm that you want to abort mission.");
        if (alert){
            status.innerHTML = "Mission aborted.";
            background.style.backgroundColor = "green";
            height.innerHTML = 0;
        }
    });

    up.addEventListener("click", function () {
        rocket.style.display = "inline-block";
    });

    down.addEventListener("click", function () {

    });

    left.addEventListener("click", function () {

    });

    right.addEventListener("click", function () {

    });

    
})