function ClickCounterGame(){
    let count = 0;
    // countという変数を準備して、0を代入する
    
    const gameContainer = document.getElementById("game-container");
    // const は定数 変更不可   htmlの特定のidのタグを探し、定数に代入する


    let button1 = document.createElement("button");
    // ボタンのタグを作成する <button>ボタン</button>を作り、変数と紐づける 1
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");

    button1.textContent = "+1ボタン"
    button2.textContent = "10 +"
    button3.textContent = "リセット"
    // <button>中身の文字をtextContentという</button>

    let counter = document.createElement("p");
    counter.textContent = count;

    button1.addEventListener("click",function(){//クリックというイベントを読み取る  2
        if(count<100){
            count++;
        }
        counter.textContent = count;
        //イベントが起きた場合の処理を記述  3
    
    })

    button2.addEventListener("click",function(){
        if(count <= 90){
            count = count + 10;
        }
        counter.textContent = count;
    })

    button3.addEventListener("click",function(){
        count = 0;
        counter.textContent = count;
    })

    gameContainer.appendChild(button1); // ボタンを表示する  4
    gameContainer.appendChild(button2); 
    gameContainer.appendChild(button3); 
    gameContainer.appendChild(counter);
}
ClickCounterGame();

function startNumberGuessGame(){
    const gameContainer = document.getElementById("game-container");
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let message = document.createElement("p");
    message.textContent = randomNumber;
    let input = document.createElement("input");
    input.type = "number";
    input.placeholder = "好きな数字を入力してください (1 ~ 100)"
    gameContainer.appendChild(message);
    gameContainer.appendChild(input);
}

startNumberGuessGame();