
const Events = document.getElementById("box");

function mouseOver(){
    Events.style.backgroundColor =  "orange";
    document.body.style.backgroundColor = "green";
    Events.innerText = "On Mouse over";
}

function mouseOut(){
    Events.style.backgroundColor = "green";
    document.body.style.backgroundColor = "orange";
    Events.innerText = "On Mouse Out";
}