const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");
const tipBtns = document.querySelectorAll(".tip-btn");
const resetBtn = document.getElementById("resetBtn");
const themeToggle = document.getElementById("themeToggle");

const tipPerPerson = document.getElementById("tipPerPerson");
const totalPerPerson = document.getElementById("totalPerPerson");
const resultDiv = document.querySelector(".result");

[billInput, tipInput, peopleInput].forEach(input => {
  input.addEventListener("input", calculateTip);
});

tipBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tipInput.value = btn.getAttribute("data-tip");
    calculateTip();
  });
});

resetBtn.addEventListener("click", () => {
  billInput.value = "";
  tipInput.value = "";
  peopleInput.value = "";
  tipPerPerson.textContent = "0.00";
  totalPerPerson.textContent = "0.00";
  resultDiv.classList.remove("show");
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

function calculateTip() {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);
  const people = parseInt(peopleInput.value);

  if (isNaN(bill) || isNaN(tipPercent) || isNaN(people) || people <= 0) {
    tipPerPerson.textContent = "0.00";
    totalPerPerson.textContent = "0.00";
    resultDiv.classList.remove("show");
    return;
  }

  const totalTip = bill * (tipPercent / 100);
  const tipEach = totalTip / people;
  const totalEach = (bill + totalTip) / people;

  tipPerPerson.textContent = tipEach.toFixed(2);
  totalPerPerson.textContent = totalEach.toFixed(2);
  resultDiv.classList.add("show");
}
