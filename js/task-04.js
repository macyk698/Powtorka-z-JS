let counterValue = 0;

const valueSpan = document.getElementById('value');
const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');

function updateCounter(value) {
  counterValue = value;
  valueSpan.textContent = counterValue;
}

incrementButton.addEventListener('click', () => {
  updateCounter(counterValue + 1);
});

decrementButton.addEventListener('click', () => {
  updateCounter(counterValue - 1);
});
