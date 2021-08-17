import "./style.css";

const div = document.querySelector('[data-js="app"]');
const btn = document.querySelector('[data-js="button"]');

const setTextDiv = () => {
  div.innerHTML = `
    <h1>B. Academy</h1>
    <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
  `;
};

setTextDiv();

const toggle = {
  "Esconder Div": () => {
    div.innerHTML = "";
    btn.innerText = "Div Visível";
  },
  "Div Visível": () => {
    setTextDiv();
    btn.innerText = "Esconder Div";
  },
};

btn.addEventListener("click", () => {
  toggle[btn.innerText]();
});
