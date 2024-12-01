const input = document.getElementById("todo-input");
const btn = document.getElementById("submit-button");
const root = document.getElementById("root");
const todos = []

function handleAddTodo() {
    const inputVal = input.value
    todos.push(inputVal)
    if (inputVal) {
        const template = `
        <li id="${inputVal}" style="color:red">
            <span>
            ${inputVal}
            </span>
            <button onclick="deleteItem(this)">delete</button>
            <button onclick="editItem(this)">edit</button>
        </li>
        `
        root.innerHTML += template
        input.value=''
    }
}

function renderTodos() {
    const template = todos.map(item => {
        return `
        <li id="${item}" style="color:red">
            <span>
            ${item}
            </span>
            <button onclick="deleteItem(this)">delete</button>
            <button onclick="editItem(this)">edit</button>
        </li>
        `
    })

    const temp = template.join("")
    root.innerHTML = temp
}
function deleteItem(clickedElement) {
    clickedElement.parentElement.remove()
}
function editItem(clickedElement){
    clickedElement.parentElement.innerHTML=`<li id="${clickedElement.parentElement.children[0].textContent}" style="color:red">
        <input type="text" id="todo-input" value=${clickedElement.parentElement.children[0].textContent}>
        <button onclick="handleAddTodoEdit(this)" id="submit-button">edit</button>
        </li>`
}
function handleAddTodoEdit(clickedElement) {
    const val=clickedElement.parentElement.children[0].value
    clickedElement.parentElement.innerHTML=`<li id="${val}" style="color:red">
            <span>
                ${val}
            </span>
            <button onclick="deleteItem(this)">delete</button>
            <button onclick="editItem(this)">edit</button>
        </li>`
}

