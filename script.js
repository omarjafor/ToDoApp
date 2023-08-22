const taskButton = document.getElementById('task-btn');
const inputField = document.getElementById('input-value');
taskButton.addEventListener('click', function(){
    console.log(inputField.value);
})
