// Abaixo implementação do input capitalize
const input = document.querySelector('[data-js="input-name"]');

const execptions = ["de", "da", "das", "do", "dos"];

function capitalize(word) {
  return word
    .toLowerCase()
    .split(" ")
    .map((word) =>
      execptions.includes(word)
        ? word
        : (word = word.charAt(0).toUpperCase() + word.substring(1))
    )
    .join(" ");
}

input.addEventListener("input", (event) => {
  event.target.value = capitalize(event.target.value);
});

// Abaixo implementação do Select Color

const form = document.querySelector("form");
const createSelect = `
  </br>
  </br>
  <select name="select" multiple data-js="select">
    <option value="#ff0000">FF0000</option>
    <option value="#00ff00">00FF00</option>
    <option value="#0000ff">0000FF</option>
    <option value="#ffff00">FFFF00</option>
    <option value="#f000ff">F00FFF</option>
  </select>
`;
form.insertAdjacentHTML("beforeend", createSelect);

const select = document.querySelector('[data-js="select"]');
document
  .querySelector("body")
  .insertAdjacentHTML("beforeend", '<div data-js="color"></div>');

select.addEventListener("change", (event) => {
  const colorDiv = document.querySelector('[data-js="color"]');
  colorDiv.innerHTML = "";
  console.log([...event.target.selectedOptions].map((color) => color.value));
  const divs = [...event.target.selectedOptions].map((color) => color.value);
  divs.forEach((color) => {
    const div = `<div style="width:100px; height:100px; background:${color}"></div>`;
    colorDiv.insertAdjacentHTML("beforeend", div);
  });
});
