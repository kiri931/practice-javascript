function increaseCount(){
    let count = parseInt(document.getElementById("text").textContent);
    count++;
    document.getElementById("text").textContent = count;
}

function decreaseCount(){
    let count = parseInt(document.getElementById("text").textContent);
    count--;
    document.getElementById("text").textContent = count;
}

function reset(){
    document.getElementById("text").textContent = 0;
}