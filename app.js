var main = document.getElementById("main");
var inp = document.getElementById("inp");
function add() {
  console.log(inp.value);
  if (inp.value == "") {
    alert("Write a Name");
  } else {
    var li = document.createElement("li");
    li.classList.add("value")
    var liText = document.createTextNode(inp.value);
    li.appendChild(liText);
    inp.value = "";

    var editbtn = document.createElement("BUTTON");
    var editbtnText = document.createTextNode("Edit Value");
    editbtn.classList.add("button")
    editbtn.appendChild(editbtnText);
    editbtn.setAttribute("onclick", "editTodo(this)");
    li.appendChild(editbtn);

    var delbtn = document.createElement("BUTTON");
    var editdelbtn = document.createTextNode("Delete Value");
    delbtn.classList.add("button")
    delbtn.appendChild(editdelbtn);
    delbtn.setAttribute("onclick", "deleteTodo(this)");
    li.appendChild(delbtn);
    main.appendChild(li);
  }
}
function editTodo(add) {
  var newValue = prompt("Enter Updated Value");
  console.log(newValue);
  add.parentNode.firstChild.nodeValue = newValue;
}
function deleteTodo(add) {
  add.parentNode.remove();
}
function delAll() {
  main.innerHTML = "";
}