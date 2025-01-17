const gameSelector = document.getElementById('game-selector');
const gameContainer = document.getElementById('game-container');

gameContainer.textContent="ゲームを選ぶとここに表示されます"

gameSelector.addEventListener("change",function(){
    gameContainer.innerHTML = "";
    switch(gameSelector.value){
        case "none":
            gameContainer.textContent="ゲームを選ぶとここに表示されます"
            break;
        case "click-counter":
            ClickCounterGame();
            break;
        case "number-guess":
            NumberGuessGame();
            break;
    }
})




function ClickCounterGame(){
    let count = 0;
    // const gameContainer = document.getElementById("game-container"); このコードは削除

    let button1 = document.createElement("button");
    button1.textContent = "+1ボタン";
    
    let button2 = document.createElement("button");
    button2.textContent = "+10ボタン";
    
    let counter = document.createElement("p");
    counter.textContent = count;

    button1.addEventListener("click",function(){
        count++;
        counter.textContent = count;
    })

    button2.addEventListener("click",function(){
        count = count + 10;
        counter.textContent = count;
    })

    gameContainer.appendChild(button1);
    gameContainer.appendChild(button2);
    gameContainer.appendChild(counter);
}

