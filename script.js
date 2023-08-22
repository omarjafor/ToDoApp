const taskButton = document.getElementById('task-btn');
const inputField = document.getElementById('input-value');
let count = 0;
taskButton.addEventListener('click', function () {
    const inputValue = inputField.value;
    const container = document.getElementById('content-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th>${(count += 1)}</th>
    <td>${inputValue}</td>
    <td>
        <button class="done-btn btn btn-success btn-xs">Done</button>
        <button class="delete-btn btn btn-error btn-xs">Delete</button>
    </td>
    `;
    container.appendChild(tr);
    inputField.value = '';
    const doneButtons = document.querySelectorAll('.done-btn');
    for(let btn of doneButtons){
        
    }
})
