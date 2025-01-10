let randomNum = Math.floor(Math.random() * 20);

let attemptsLeft = 5;

const input = document.querySelector('.input');
const btn = document.querySelector('.container__btn');
// const text = document.querySelector('.container__btns-score');
const clueTxt = document.querySelector('.clue');
const attempts = document.querySelector('.container__text-attempts');

btn.addEventListener('click', () => {
  inputValue = Number(input.value);
  if (!inputValue || isNaN(inputValue)) {
    alert('Введите число');
    input.value = '';
  } else if (inputValue > 20) {
    alert('Введите число от 1 до 20');
    input.value = '';
  } else {
    guessNum(inputValue);
  }
});

function guessNum(playerMove) {
  attemptsLeft--;
  attempts.textContent = `Попыток осталось: ${attemptsLeft}`;

  if (playerMove > randomNum) {
    clueTxt.textContent = 'Подсказка: меньше';
  } else if (playerMove < randomNum) {
    clueTxt.textContent = 'Подсказка: больше';
  }

  if (playerMove === randomNum) {
    attempts.textContent = 'Вы выиграли';
    btn.disabled = true;
  }

  if (attemptsLeft <= 3) {
  }

  if (attemptsLeft <= 0) {
    btn.disabled = true;
    attempts.textContent = 'Вы проиграли';
  }

  input.value = '';
  console.log(randomNum);
}
