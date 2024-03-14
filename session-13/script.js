function submitTodo() {
    const newTodo = document.getElementById("add-todo").value;
  
    let todos = JSON.parse(localStorage.getItem("todos"));
  
    if (todos) {
      todos.push({
        id: todos[todos.length - 1].id + 1,
        name: newTodo,
        checked: false,
      });
    } else {
      todos = [
        {
          id: 0,
          name: newTodo,
          checked: false,
        },
      ];
    }
  
    localStorage.setItem("todos", JSON.stringify(todos));
  
    document.getElementById("add-todo").value = "";
  
    displayTodos();
  }
  
  function displayTodos() {
    const todos = JSON.parse(localStorage.getItem("todos"));
  
    let list = "";
  
    if (todos) {
      for (let i = 0; i < todos.length; i++) {
        list += `
        <ul class="list-group list-group-horizontal rounded-0 bg-transparent m-2">
          <li class="list-group-item d-flex align-item-center">
              <div class="form-check">
                  <input class="form-check-input me-0" type="checkbox" value="" id=${todos[i].id} onchange="setComplete(this.checked, this.id)" aria-label="..." ${
          todos[i].checked ? "checked" : ""}>
              </div>
          </li>
  
          <li class="list-group-item d-flex align-item-center flex-grow-1">
              <p class="lead fw-normal mb-0">${todos[i].name}</p>
          </li>
  
          <li class="list-group-item d-flex align-item-center flex-grow-1">
              <button class="btn btn-danger" id=${
                todos[i].id
              } onclick="deleteTodo(this.id)">Delete</button>
          </li>
      </ul>
        `;
      }
    }
  
    document.getElementById("list-todo").innerHTML = list;
  }

function setComplete(checked, id) {
  let todos = JSON.parse(localStorage.getItem("todos"))

  todos = todos.map(el => {
    if (el.id === Number(id)) {
      el.checked = checked
    }
    return el;
  })

  localStorage.setItem("todos", JSON.stringify(todos))

  displayTodos()
}

function deleteTodo(id) {
  
  let todos = JSON.parse(localStorage.getItem("todos"))

  todos = todos.filter(el => el.id !== Number(id))

  if (todos.length) {
    localStorage.setItem("todos", JSON.stringify(todos))
  } else {
    localStorage.removeItem("todos")
  }
  displayTodos()
}