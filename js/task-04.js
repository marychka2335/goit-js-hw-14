const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');
let counterValue = 0;
btnIncrement.addEventListener("click", function () {
  counterValue += 1;
  value.textContent = counterValue;
  console.log(value.textContent);
});
btnDecrement.addEventListener("click", function () {
  counterValue -= 1;
  value.textContent = counterValue;
  console.log(value.textContent);
});