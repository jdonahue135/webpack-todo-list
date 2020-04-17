const renderSidebar = (projectList) => {
    const ul = document.querySelector('#sidebar ul')
    for (let x=0; x < projectList.length; x++) {
        let li = document.createElement('li');
        li.textContent = projectList[x].getTitle();
        ul.appendChild(li);
    }
    let addNew = document.createElement('li');
    addNew.textContent = "+ Add new"
    ul.appendChild(addNew);
}

export default renderSidebar