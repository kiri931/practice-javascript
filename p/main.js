function increaseCount(){
    let count = parseInt(document.getElementById("text").textContent);
    count++;
    document.getElementById("text").textContent = count;
}