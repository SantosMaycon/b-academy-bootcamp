const body = document.querySelector("body");

body.innerHTML = `
  <form>
    <label for="name">Name</label>
    <input type="text" name="name" id="name" data-js="input-name">
  </form>
`;

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
