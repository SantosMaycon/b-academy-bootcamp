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
const form = document.querySelector("[data-js='form']");
const select = document.createElement("select");
select.setAttribute("data-js", "select-color");
select.multiple = true;
select.style.display = "block";
select.style.margin = "30px 0 20px 0";

const colors = [
  { text: "Black", value: "#000000" },
  { text: "Yellow", value: "#FFFF00" },
  { text: "Red", value: "#FF0000" },
  { text: "Green", value: "#00FF00" },
  { text: "Blue", value: "#0000FF" },
  { text: "Magenta", value: "#FF00FF" },
];

colors.forEach(({ text, value }) => {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = text;
  select.appendChild(option);
});

form.appendChild(select);

const div = document.createElement("div");
div.setAttribute("data-js", "color-div");
div.style.display = "flex";
div.style.flexWrap = "wrap";
form.after(div);

select.addEventListener("change", (event) => {
  div.innerHTML = "";
  [...event.target.selectedOptions].forEach(({ value }) => {
    const div_color = document.createElement("div");
    div_color.style.width = "100px";
    div_color.style.height = "100px";
    div_color.style.backgroundColor = value;
    div.appendChild(div_color);
  });
});
