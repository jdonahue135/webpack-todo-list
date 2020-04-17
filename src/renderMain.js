const renderMain = (todoList) => {
    const ul = document.querySelector('#main ul')
    for (let x=0; x < todoList.length; x++) {
        let li = document.createElement('li');
        li.textContent = todoList[x].getTitle();
        ul.appendChild(li);
    }
    let addNew = document.createElement('li');
    addNew.textContent = "+ Add new"
    ul.appendChild(addNew);
}

export default renderMain