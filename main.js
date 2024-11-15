/* პირველი დავალება */ /////////////////////////////////

const modalBtn = document.querySelector(".modalBtn");
const modalCloseBtn = document.querySelector(".modalCloseBtn");
const overlay = document.querySelector(".overlay");
const body = document.body;

modalBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
});

modalCloseBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

overlay.addEventListener("click", (event) => {
  console.log(event.target);
  if (event.target === overlay) {
    overlay.style.display = "none";
  }
});

/* მეორე დავალება */ /////////////////////////////////

const colorInput = document.getElementById("colorChange");
const colorBtn = document.getElementById("colorBtn");

const colorArr = ["red", "blue", "green", "black", "white"];

colorBtn.addEventListener("click", () => {
  color = colorInput.value;
  if (colorArr.includes(color)) {
    body.style.backgroundColor = color;
  } else {
    alert("აირჩიე ამ ფერებიდან :red, blue, green, black, white");
  }
});

/* მესამე დავალება */ /////////////////////////////////

const numberInput = document.getElementById("numberInput");
const avarageBtn = document.getElementById("avarageBtn");
const avarageCounted = document.getElementById("avarageCounted");

avarageBtn.addEventListener("click", () => {
  let value = numberInput.value.trim();

  const isValidInput = /^(\d+(:\d+)+)$/.test(value);

  if (!isValidInput) {
    console.log("გთხოვთ შეიყვანოთ სწორი ფორმატი (მაგ. 1:2:3:4:5)");
    alert("გთხოვთ შეიყვანოთ სწორი ფორმატი (მაგ. 1:2:3:4:5)");
    return;
  }

  let numbers = value.split(":").map(Number);

  let sum = numbers.reduce((acc, num) => acc + num, 0);

  let avarage = sum / numbers.length;

  console.log(avarage);
  avarageCounted.innerHTML = avarage;
});
