import todo from './todo';
import renderDetail from './renderDetail';

const renderMain = (project) => {
    //clear content
    let main = document.querySelector('#main');
    let element = main.lastElementChild;
    while (element) {
        main.removeChild(main.lastElementChild);
        element = main.lastElementChild;
    }
    
    //render title
    const h2 = document.createElement('h2');
    h2.textContent = project.getTitle();
    main.appendChild(h2);

    //render todo list
    const ul = document.createElement('ul');
    main.appendChild(ul);
    let todoList = project.getTodos();
    for (let x=0; x < todoList.length; x++) {
        let li = document.createElement('li');
        li.textContent = todoList[x].getTitle();
        ul.appendChild(li);
        li.addEventListener('click', () => {
            renderDetail(todoList[x]);
        })
    }
    let addNew = document.createElement('button');

    //INCOMPLETE: render add new button
    addNew.textContent = "+ Add new"
    ul.appendChild(addNew);
    addNew.addEventListener('click', () => {
        ul.removeChild(addNew);
        let form = document.createElement('input');
        ul.appendChild(form);
        form.addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
                let newTodo = todo(form.value);
                project.addTodo(newTodo);
                ul.removeChild(form);
                renderMain(project);
            }
        })
    })
}

export default renderMain