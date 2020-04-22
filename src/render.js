import project from './project';
import todo from './todo';

const renderSidebar = (projectList) => {
        //clear existing list
    const ul = document.querySelector('#sidebar ul')
    let element = ul.lastElementChild;
    while (element) {
        ul.removeChild(ul.lastElementChild);
        element = ul.lastElementChild
    }

    //create list items for projects
    for (let x=0; x < projectList.length; x++) {
        let li = document.createElement('li');
        li.textContent = projectList[x].title;
        ul.appendChild(li);
        li.addEventListener('click', () => {
            renderMain(projectList[x])
            renderDetail(projectList[x].getTodos()[0], projectList[x])
        });
    }

    //make 'add new' button
    let addNew = document.createElement('input');
    addNew.setAttribute('placeholder', '+ Add New')
    ul.appendChild(addNew);
    
    addNew.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            let newProject = project(addNew.value);
            projectList.push(newProject);
            ul.removeChild(addNew);
            renderSidebar(projectList);
        }
    })
}
const renderMain = (project) => {
    //clear content
    let main = document.querySelector('#main');
    let element = main.lastElementChild;
    while (element) {
        main.removeChild(main.lastElementChild);
        element = main.lastElementChild;
    }
    if (!project) {
        project = projectList[0]
    }
    //render title
    const h2 = document.createElement('h2');
    h2.textContent = project.title;
    main.appendChild(h2);

    //render todo list
    const ul = document.createElement('ul');
    main.appendChild(ul);
    let todoList = project.getTodos();
    for (let x=0; x < todoList.length; x++) {
        let li = document.createElement('li');
        li.textContent = todoList[x].title;
        ul.appendChild(li);
        li.addEventListener('click', () => {
            renderDetail(todoList[x], project);
        })
    }
    let addNew = document.createElement('input');
    addNew.setAttribute('placeholder', '+ Add New')
    ul.appendChild(addNew);
    addNew.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            let newTodo = todo(addNew.value);
            project.addTodo(newTodo);
            ul.removeChild(addNew);
            renderMain(project);
        }
    })
}
const renderDetail = (todoItem) => {
    if (!todoItem) {
        todoItem = projectList[0].getTodos()[0];
    }
    
    const detail = document.querySelector('#detail');
    
    //remove current content
    let element = detail.lastElementChild;
    while (element) {
        detail.removeChild(detail.lastElementChild);
        element = detail.lastElementChild;
    }
    
    //check if todo exists
    if (!todoItem) {
        const message = document.createElement('h2');
        message.textContent = 'Create a Todo to see details!'
        detail.appendChild(message);

    } else {
        let keys = Object.getOwnPropertyNames(todoItem)
        let container = document.querySelector('#detail')
        for (let x = 0; x < 3; x++) {
            let label = document.createElement('label');
            label.textContent = `${keys[x].charAt(0).toUpperCase() + keys[x].slice(1)}:`;
            container.appendChild(label);
            let element = document.createElement('input');
            if (todoItem[keys[x]] == undefined) {
                element.setAttribute('placeholder', `add ${keys[x]}`)
            } else { element.value = todoItem[keys[x]]; }
            container.appendChild(element);
        }

        let priority = document.createElement('input');
        priority.setAttribute('type', 'checkbox');
        if (todoItem.priority == true) { priority.setAttribute('checked', 'true')}
        container.appendChild(priority);
        let priorityLabel = document.createElement('label');
        priorityLabel.textContent = 'High Priority';
        container.appendChild(priorityLabel);
        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.setAttribute('type', 'button');
        deleteButton.addEventListener('click', () => {
            console.log(project)
            project.deleteTodo(todoItem);
            renderDetail(project.getTodos()[0])
        })
        container.appendChild(deleteButton);
    }
}

const render = (projectList) => {
    renderSidebar(projectList);
    renderMain(projectList[0]);
    renderDetail(projectList[0].getTodos()[0]);
}

export { render }