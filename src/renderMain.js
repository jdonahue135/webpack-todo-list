const renderMain = (project) => {
    //render title
    const h2 = document.querySelector('#main h2');
    h2.textContent = project.getTitle();

    //render todo list
    const ul = document.querySelector('#main ul')
    let todoList = project.getTodos();
    for (let x=0; x < todoList.length; x++) {
        let li = document.createElement('li');
        li.textContent = todoList[x].getTitle();
        ul.appendChild(li);
    }
    let addNew = document.createElement('li');

    //INCOMPLETE: render add new button
    addNew.textContent = "+ Add new"
    ul.appendChild(addNew);
}

export default renderMain