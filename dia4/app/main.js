import "./style.css";

const form = document.querySelector("[data-js='form-cars']");
const tbody = document.querySelector("[data-js='tbody']");

const addElement = {
  image: (value) => {
    const img = document.createElement("img");
    img.setAttribute("src", value);
    img.style.width = "100px";
    img.style.height = "100px";
    img.style.display = "block";
    img.style.margin = "0 auto";
    return createElementTD(img);
  },
  color: (value) => {
    const div = document.createElement("div");
    div.style.backgroundColor = value;
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.margin = "0 auto";
    return createElementTD(div);
  },
  model: (value) => createTextTD(value),
  plate: (value) => createTextTD(value),
  year: (value) => createTextTD(value),
};

const createTextTD = (text) => {
  const td = document.createElement("td");
  td.style.textAlign = "center";
  td.textContent = text;
  return td;
};

const createElementTD = (element) => {
  const td = document.createElement("td");
  td.appendChild(element);
  return td;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const tr = document.createElement("tr");
  [...event.target].forEach(({ name, value }, index) => {
    if (name) tr.appendChild(addElement[name](value));

    name === "color"
      ? (event.target[index].value = "#000000")
      : (event.target[index].value = "");
  });
  tbody.appendChild(tr);
  event.target[0].focus();
});
