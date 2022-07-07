const $form = document.querySelector(".form-input");
const ulList = document.querySelector(".todoList");

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  const date = new Date().toLocaleDateString();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const $input = document.querySelector("input");
  const addTask = $input.value;

  if (addTask != "") {
    const newTodoEl = `<li class="elementTodo"><input type="checkbox"/><span>${addTask}</span> ${hours}:${minutes} del ${date} <button class="removeTask">X</button></li>`;

    ulList.insertAdjacentHTML("beforeend", newTodoEl);
    $input.value = "";
  } else {
    alert("Non hai inserito nessuna task!");
  }

  ulList.addEventListener("click", (event) => {
    if (event.target.className === "removeTask") {
      event.target.closest("li").remove();
    }
  });
});
