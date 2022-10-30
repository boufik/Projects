let winbutton = document.getElementById("winbutton");
let doulid = document.getElementById('doula');
var audio = new Audio('gyali.mp3');

winbutton.onclick = function() {
    audio.play();
    console.log("pressed");
}

function doulFunction() {
    var input = prompt("Who disturbs a grumpy drawer in his sleep? Choose your numbers wisely!");

    if(input != "1234"){
        location.reload();
    }
    else{
        alert("The drawer reluctantly opens and reveals its secrets");
        doulid.style.visibility = "visible"; 
    }
}