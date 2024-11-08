
function RockPaperScissors() {
  const choices = ["gu","choki","pa"];
  let select = document.createElement('select');
  choices.forEach(choice => {
    let option = document.createElement('option');
    option.value = choice.toLowerCase();
    option.textContent = choice;
    select.appendChild(option);
  });
  let button = document.createElement('button');
    button.textContent = '手を出す';
    let result = document.createElement('p');
    let image = document.createElement('img');
    image.alt = 'Choice';
    image.style.width = '100px';
    image.style.height = '100px';
  button.addEventListener('click', function() {
    const imageName = select.value;
    image.src = `./image/janken_${imageName}.png`;
  });
  gameContainer.appendChild(select);
  gameContainer.appendChild(button);
  gameContainer.appendChild(image);
}