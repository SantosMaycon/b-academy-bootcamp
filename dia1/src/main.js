import "./style.css";

const div = document.querySelector('[data-js="app"]');
const btn = document.querySelector('[data-js="button"]');

div.innerHTML = `
    <h1>B. Academy</h1>
    <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
    `;

div.style.display = "block";

const toggle = {
  block: () => {
    div.style.display = "none";
    btn.innerText = "Mostrar Div";
  },
  none: () => {
    div.style.display = "block";
    btn.innerText = "Esconder Div";
  },
};

btn.addEventListener("click", () => {
  toggle[div.style.display]();
});
