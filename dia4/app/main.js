import "./style.css";

const form = document.querySelector("[data-js='form-cars']");
const tbody = document.querySelector("[data-js='tbody']");
const url = "http://localhost:3333/cars";
const object = {};

const trHead = document.querySelector("[data-js='table'] > thead > tr");
const th = document.createElement("th");
th.textContent = "Delete";
trHead.appendChild(th);

const addObjectValue = {
  image: (value) => {
    object.image = value;
  },
  model: (value) => {
    object.brandModel = value;
  },
  year: (value) => {
    const NUMERIC_REGEXP = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;
    NUMERIC_REGEXP.test(value) ? (object.year = value) : (object.year = "");
  },
  plate: (value) => {
    const PLATE_REGEXP = /[a-zA-Z]{3}-[0-9]{4}/g;
    PLATE_REGEXP.test(value)
      ? (object.plate = value.toUpperCase())
      : (object.plate = "");
  },
  color: (value) => {
    const COLOR_REGEXP = /[0-9A-Fa-f]{6}/g;
    COLOR_REGEXP.test(value) ? (object.color = value) : (object.color = "");
  },
};

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
  brandModel: (value) => createTextTD(value),
  plate: (value) => createTextTD(value),
  year: (value) => createTextTD(value),
};

const createTdNone = () => {
  tbody.innerHTML = "";
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.textContent = "Nenhum carro encontrado!";
  td.setAttribute("colspan", "6");
  td.style.height = "80px";
  td.style.color = "#FF0000";
  tr.appendChild(td);
  tbody.appendChild(td);
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

const addDeleteButton = (plate) => {
  const tr = document.querySelector(`#${plate}`);

  const tdButtonDelete = document.createElement("td");
  const buttonDelete = document.createElement("button");
  buttonDelete.textContent = "Delete";
  buttonDelete.addEventListener("click", async () => {
    await DELETE_CAR(plate);
  });

  tr.appendChild(tdButtonDelete);
  tdButtonDelete.appendChild(buttonDelete);
};

const tdObject = (json) => {
  tbody.innerHTML = "";
  json.forEach((car) => {
    const tr = document.createElement("tr");
    tr.setAttribute("id", car.plate);
    for (const key in car) tr.appendChild(addElement[key](car[key]));
    tbody.appendChild(tr);
    addDeleteButton(car.plate);
  });
};

const GET_CARS = async () => {
  const response = await fetch(url);
  const json = await response.json();
  json.length === 0 ? createTdNone() : tdObject(json);
};

await GET_CARS();
