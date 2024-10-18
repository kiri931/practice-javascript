const gameSelector = document.getElementById('game-selector');
const gameContainer = document.getElementById('game-container');

gameSelector.addEventListener('change', function() {
  gameContainer.innerHTML = '';
  switch (gameSelector.value) {
    case 'number-guess':
      startNumberGuessGame();
      break;
    case 'click-counter':
      startClickCounterGame();
      break;
    case 'rock-paper-scissors':
      startRockPaperScissorsGame();
      break;
  }
});

function startNumberGuessGame() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let message = document.createElement('p');
  let input = document.createElement('input');
  input.type = 'number';
  input.placeholder = '好きな数字を入力してください (1-100)';
  let button = document.createElement('button');
  button.textContent = '予想する';

  button.addEventListener('click', function() {
    const userGuess = parseInt(input.value);
    if (userGuess === randomNumber) {
      message.textContent = '正解！！値はまさにそれ！';
    } else if (userGuess > randomNumber) {
      message.textContent = '値が高いよ';
    } else {
      message.textContent = '値が小さいよ';
    }
  });

  gameContainer.appendChild(input);
  gameContainer.appendChild(button);
  gameContainer.appendChild(message);
}

function startClickCounterGame() {
  let count = 0;
  let message = document.createElement('p');
  message.textContent = 'たくさんクリックしてね';
  let button = document.createElement('button');
  button.textContent = 'クリック！';
  let counter = document.createElement('p');
  counter.textContent = `Count: ${count}`;

  button.addEventListener('click', function() {
    count++;
    counter.textContent = `クリック数: ${count}`;
  });

  gameContainer.appendChild(message);
  gameContainer.appendChild(button);
  gameContainer.appendChild(counter);
}

function startRockPaperScissorsGame() {
  const choices = ['グー', 'パー', 'チョキ'];
  let message = document.createElement('p');
  let select = document.createElement('select');
  choices.forEach(choice => {
    let option = document.createElement('option');
    option.value = choice.toLowerCase();
    option.textContent = choice;
    select.appendChild(option);
  });
  let button = document.createElement('button');
      button.textContent = 'Play';
      let result = document.createElement('p');
      let image = document.createElement('img');
      image.alt = 'Computer Choice';
      image.style.width = '100px';
      image.style.height = '100px';

      button.addEventListener('click', function() {
        const userChoice = select.value;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        let imageName;
        switch (computerChoice) {
          case 'グー':
            imageName = 'gu';
            break;
          case 'チョキ':
            imageName = 'choki';
            break;
          case 'パー':
            imageName = 'pa';
            break;
        }
        image.src = `./image/janken_${imageName}.png`;

        if (userChoice === computerChoice) {
          result.textContent = `あいこ！ ${userChoice}`;
        } else if (
          (userChoice === 'グー' && computerChoice === 'チョキ') ||
          (userChoice === 'チョキ' && computerChoice === 'パー') ||
          (userChoice === 'パー' && computerChoice === 'グー')
        ) {
          result.textContent = `あなたの勝ち　相手の手：${computerChoice}`;
        } else {
          result.textContent = `あなたの負け　相手の手：${computerChoice}`;
        }
      });

      gameContainer.appendChild(select);
      gameContainer.appendChild(button);
      gameContainer.appendChild(image);
      gameContainer.appendChild(result);
    }