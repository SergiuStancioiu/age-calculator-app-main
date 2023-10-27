const currentdate = new Date();

const dayInput = document.querySelector(".day-input");
const monthInput = document.querySelector(".month-input");
const yearInput = document.querySelector(".year-input");

let dayValue = document.querySelector(".day-value");

console.log(dayInput);
console.log(monthInput);
console.log(yearInput);

dayInput.addEventListener("input", (event) => {
  dayValue.textContent = event.target.value; // Update the content of dayValue
});
