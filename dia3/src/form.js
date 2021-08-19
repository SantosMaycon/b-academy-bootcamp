const body = document.querySelector("body");

body.innerHTML = `
  <form>
    <label for="name">Name</label>
    <input type="text" name="name" id="name" data-js="input-name">
  </form>
`;

// Abaixo implementação do input capitalize

const input = body.querySelector('[data-js="input-name"]');

function exceptions(word) {
  const exceptions = ["de", "da", "do", "dos"];
  return exceptions.some((excp) => word.toLowerCase() === excp);
}

function capitalize(word) {
  let splitWords = word.toLowerCase().split(" ");
  for (let i = 0; i < splitWords.length; i++) {
    if (exceptions(splitWords[i])) {
      splitWords[i] = splitWords[i].toLowerCase();
    } else {
      splitWords[i] =
        splitWords[i].charAt(0).toUpperCase() + splitWords[i].substring(1);
    }
  }
  return splitWords.join(" ");
}

input.addEventListener("input", (event) => {
  event.target.value = capitalize(event.target.value);
});

// Abaixo implementação do Select Color

const form = body.querySelector("form");
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
body.insertAdjacentHTML("beforeend", '<div data-js="color"></div>');

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
