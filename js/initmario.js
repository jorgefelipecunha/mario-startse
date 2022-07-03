
function howto(){
    let howtoDisplay = document.getElementById('howto').style.display;

    console.log(howtoDisplay);

    if(howtoDisplay === "none" || howtoDisplay === ""){
        document.getElementById('howto').style.display = "flex";
    }else{
        document.getElementById('howto').style.display = "none";
    }
}

function credits(){
    let creditsDisplay = document.getElementById('credits').style.display;

    console.log(creditsDisplay);

    if(creditsDisplay === "none" || creditsDisplay === ""){
        document.getElementById('credits').style.display = "flex";
    }else{
        document.getElementById('credits').style.display = "none";
    }
}