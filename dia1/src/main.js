import "./style.css";

const div = document.querySelector('[data-js="app"]');
const btn = document.querySelector('[data-js="button"]');
let hiden = false;

const setTextDiv = () => {
  div.innerHTML = `
    <h1>B. Academy</h1>
    <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
    `;
};

setTextDiv();

const toggle = {
  false: () => {
    div.innerHTML = "";
    btn.innerText = "Mostrar Div";
    hiden = true;
  },
  true: () => {
    setTextDiv();
    btn.innerText = "Esconder Div";
    hiden = false;
  },
};

btn.addEventListener("click", () => {
  toggle[hiden]();
});
