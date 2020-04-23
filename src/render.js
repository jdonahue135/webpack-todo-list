import project from './project';
import todo from './todo';

//render defaults
const render = (projectList, todoList) => {
    renderSidebar(projectList, todoList);
    renderMain(projectList[0], todoList);
    renderDetail(projectList[0].getTodos()[0], todoList);
}

const renderSidebar = (projectList, todoList) => {
        //clear existing list
    const ul = document.querySelector('#sidebar ul')
    clearContent(ul);

    //create list nodes for projects
    for (let x=0; x < projectList.length; x++) {
        let li = document.createElement('li');
        li.textContent = projectList[x].title;
        ul.appendChild(li);
        li.addEventListener('click', () => {
            renderMain(projectList[x], todoList);
            renderDetail(projectList[x].getTodos()[0], todoList)
        });
    }

    //make 'add new' button
    let addNew = document.createElement('input');
    addNew.setAttribute('placeholder', '+ Add New')
    ul.appendChild(addNew);
    
    addNew.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            //save new project
            let newProject = project(addNew.value);
            projectList.push(newProject);
            localStorage.removeItem('projectList');
            localStorage.setItem('projectList', JSON.stringify(projectList));
            ul.removeChild(addNew);
            //render sidebar with updated project list
            renderSidebar(projectList);
        }
    })
}
const renderMain = (project, todoList) => {
    //clear content
    let main = document.querySelector('#main');
    clearContent(main);

    //render title
    const h2 = document.createElement('h2');
    h2.textContent = project.title;
    main.appendChild(h2);

    //render todo list
    const ul = document.createElement('ul');
    main.appendChild(ul);
    if (project.getTodos().length > 0) {
        let todos = project.getTodos();
        for (let x=0; x < todos.length; x++) {
            let li = document.createElement('li');
            li.textContent = todos[x].title;
            //add unformatted date
            let p = document.createElement('p')
            p.textContent = todos[x].date;
            li.appendChild(p);
            ul.appendChild(li);
            li.addEventListener('click', () => {
                renderDetail(todos[x], todoList);
            });
        }
    }

    //add button to add new todo
    let addNew = document.createElement('input');
    addNew.setAttribute('placeholder', '+ Add Todo')
    ul.appendChild(addNew);
    addNew.addEventListener('keydown', (e) => {
        //only fire event when 'enter' key is pressed
        if (e.keyCode === 13) {
            //create new todo item and append to project and todo List
            let newTodo = todo(addNew.value);
            newTodo.project = project;
            project.addTodo(newTodo);
            todoList.push(newTodo);
            localStorage.removeItem('todoList');
            localStorage.setItem('todoList', JSON.stringify(todoList));
            ul.removeChild(addNew);
            renderMain(project, todoList);
            renderDetail(newTodo, todoList);
        }
    })
}
const renderDetail = (todoItem, todoList) => {
    //remove current content
    const detail = document.querySelector('#detail');
    clearContent(detail);
    
    //check if todo exists
    if (!todoItem) {
        const message = document.createElement('h2');
        message.textContent = 'Create a Todo to see details!'
        detail.appendChild(message);
    } else {
        //todo exists, populate info
        let project = todoItem.project;
        let keys = Object.getOwnPropertyNames(todoItem)
        let container = document.querySelector('#detail')
        for (let x = 0; x < 3; x++) {
            //populate title, description and date
            let label = document.createElement('label');
            label.textContent = `${keys[x].charAt(0).toUpperCase() + keys[x].slice(1)}:`;
            container.appendChild(label);
            let element = document.createElement('input');
            element.setAttribute('id', keys[x]);
            if (todoItem[keys[x]] == undefined) {
                element.setAttribute('placeholder', `add ${keys[x]}`)
            } else { element.value = todoItem[keys[x]]; }
            container.appendChild(element);
        }

        //populate priority checkbox
        let priority = document.createElement('input');
        priority.setAttribute('type', 'checkbox');
        priority.setAttribute('value', 'true');
        priority.addEventListener('click', (e) => {
            if (priority.hasAttribute('checked')) { priority.removeAttribute('checked')}
            else { priority.setAttribute('checked', 'true') }
        })
        if (todoItem.priority == true) { priority.setAttribute('checked', 'true')}
        container.appendChild(priority);
        let priorityLabel = document.createElement('label');
        priorityLabel.textContent = 'High Priority';
        container.appendChild(priorityLabel);

        //add delete button
        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.setAttribute('type', 'button');
        deleteButton.addEventListener('click', () => {
            //delete todo, update local storage
            project.deleteTodo(todoItem);
            todoList.splice(project.indexof(todoItem), 1);
            localStorage.removeItem('todoList');
            localStorage.setItem('todoList', JSON.stringify(todoList));
            renderMain(project, todoList);
            renderDetail(project.getTodos()[0], todoList);
        })

        //add save button
        let saveButton = document.createElement('button')
        saveButton.textContent = 'Save'
        saveButton.setAttribute('type', 'button');
        saveButton.addEventListener('click', () => {
            //update todo and save to localStorage
            let checkbox;
            if (priority.hasAttribute('checked')) {
                checkbox = true;
            } else { checkbox = false }
            let newTodo = todo(title.value, description.value, date.value, checkbox, project)
            project.updateTodo(todoItem, newTodo);
            let index = todoList.findIndex((element) => {
                if (element == todoItem) { return element }
            })
            todoList.splice(index, 1, newTodo);
            localStorage.removeItem('todoList');
            localStorage.setItem('todoList', JSON.stringify(todoList));
            renderMain(project, todoList);
            renderDetail(newTodo, todoList);
        })
        container.appendChild(deleteButton);
        container.appendChild(saveButton);
    }
}

const clearContent = (node) => {
    let element = node.lastElementChild;
    while (element) {
        node.removeChild(node.lastElementChild);
        element = node.lastElementChild;
    }
} 

export { render }