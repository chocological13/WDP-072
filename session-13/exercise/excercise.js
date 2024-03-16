function addStudent() {
    let students = JSON.parse(localStorage.getItem("students")) || [];

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;

    let student = {
        id: 0,
        name: name,
        address: address,
    };

    if (students.length > 0) {
        student.id = students[students.length - 1].id + 1;
    }

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    document.getElementById("name").value = "";
    document.getElementById("address").value = "";

    displayStudents();
}

function displayStudents() {
    const students = JSON.parse(localStorage.getItem("students"));

    let list = "";
  
    if (students) {
      for (let i = 0; i < students.length; i++) {
        list += `
        <ul class="list-group list-group-horizontal rounded-0 bg-transparent m-2">
  
          <li class="list-group-item d-flex align-item-center flex-grow-1">
              <p class="lead fw-normal mb-0">${students[i].name}</p>
          </li>
          <li class="list-group-item d-flex align-item-center flex-grow-1">
              <p class="lead fw-normal mb-0">${students[i].address}</p>
          </li>
  
          <li class="list-group-item d-flex align-item-center flex-grow-1">
              <button class="btn btn-danger" id=${
                students[i].id
              } onclick="deleteStudents(this.id)">Delete</button>
          </li>
      </ul>
        `;
      }
    }
  
    document.getElementById("list-students").innerHTML = list;
  }

  function deleteStudents(id) {
  
    let students = JSON.parse(localStorage.getItem("students"))
  
    students = students.filter(el => el.id !== Number(id))
  
    if (students.length) {
      localStorage.setItem("students", JSON.stringify(students))
    } else {
      localStorage.removeItem("students")
    }
    displayStudents()
  }