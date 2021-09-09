
 const input = document.getElementById('input');
 const button = document.getElementById('button');
 const ul = document.getElementById('ul');
 const clearAll = document.getElementById('clear');

const displayTodoItems = () => {
    const todoItem = getAllTodo();
    for (const item in todoItem) {
        displayItem(item)
    }
}


 button.addEventListener('click',()=>{
     if (!input.value) {
         return;
     }
    //  display add item 
    displayItem(input.value)

    // add item on localStorage 
    addItemsTodo(input.value)

    // clear input value 
    input.value = '';
});



const displayItem = value =>{
    const div = document.createElement('div');
    div.classList.add('row')
    div.innerHTML= `<p>${value}</p>
                <div class='icon'>
                <i class="fas fa-times"></i>
                </div> 
    `
    ul.appendChild(div);
}

const getAllTodo = () => {
    const todo = localStorage.getItem('todo')
    let todoObj;
    if (todo) {
        todoObj = JSON.parse(todo)
    }else{
        todoObj = {}
    }
    return todoObj;
}

const addItemsTodo = item =>{
    const stodo = getAllTodo();
    if (stodo[item]) {
        stodo[item] = stodo[item]+1
    }else{
        stodo[item] = 1;
    }
    const itemStringify = JSON.stringify(stodo)
    localStorage.setItem('todo',itemStringify)   
}



ul.addEventListener('click',(e)=>{
    if (e.target.className == 'row') {
        e.target.classList.add('completed')
        console.log(e.target.classList);
    }
})

clearAll.addEventListener('click',()=>{
    ul.textContent = '';
    localStorage.removeItem('todo');
});

displayTodoItems();








 