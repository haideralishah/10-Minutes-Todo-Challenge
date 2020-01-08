var todo = document.getElementById('todo');
var todoList = [];
var todoItems = document.getElementById('todoItems');
var editIndex;
var todoBtn = document.getElementById('addBtn');

function addTodo() {
    todoList.push(todo.value);
    todo.value = '';
    renderList();
}

function renderList() {
    todoItems.innerHTML = '';
    for (var i = 0; i < todoList.length; i++) {
        var div = document.createElement('div');
        var span = document.createElement('span');
        var spanText = document.createTextNode(todoList[i]);

        var deltBtn = document.createElement('button');
        var deltText = document.createTextNode('delete');
        deltBtn.appendChild(deltText);
        deltBtn.setAttribute('onclick', 'deleteTodo(' + i + ')')

        var editBtn = document.createElement('button');
        var editText = document.createTextNode('edit');
        editBtn.appendChild(editText);
        editBtn.setAttribute('onclick', 'editTodo(' + i + ')')

        span.appendChild(spanText);
        div.appendChild(span);
        div.appendChild(deltBtn)
        div.appendChild(editBtn)

        todoItems.appendChild(div);
    }

}

function deleteTodo(todiIndex) {
    todoList.splice(todiIndex, 1);
    renderList()
}

function editTodo(todiIndex) {
    editIndex = todiIndex;
    todo.value = todoList[todiIndex];
    todoBtn.innerHTML = 'Save';
    todoBtn.setAttribute('onclick', 'saveTodo()');
}

function saveTodo() {
    todoList.splice(editIndex, 1, todo.value);
    todo.value = '';
    todoBtn.innerHTML = 'Add';
    todoBtn.setAttribute('onclick', 'addTodo()');
    renderList();

}