let input = document.querySelector("input");
let button = document.querySelector("button");
let inputValue;
let resultCompoent = document.querySelector(".result");
let form = document.getElementById("formTermInput");

input.addEventListener("keyup", (event) => {
  event.preventDefault();
  inputValue = input.value;

  if (event.code != "Enter") {
    resultCompoent.style.display = "none";
  }

  if (inputValue) {
    return button.classList.add("active");
  }

  return button.classList.remove("active");
});

const submitHandler = (event) => {
  event.preventDefault();
  const reversValue = inputValue.split("").reverse().join("");

  resultCompoent.style.display = "block";

  if (inputValue.toLowerCase() === reversValue.toLowerCase()) {
    return (resultCompoent.innerHTML = `<b>${input.value}</b> adalah kata palindrome.`);
  }

  return (resultCompoent.innerHTML = `<b>${input.value}</b> bukan kata palindrome.`);
};

form.addEventListener("submit", submitHandler);
