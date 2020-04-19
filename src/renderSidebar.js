import project from './project';
import renderMain from './renderMain';

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
        li.textContent = projectList[x].getTitle();
        ul.appendChild(li);
        li.addEventListener('click', () => {
            renderMain(projectList[x])
        });
    }

    //make 'add new' button
    let addNew = document.createElement('button');
    addNew.textContent = "+ Add new"
    ul.appendChild(addNew);
    addNew.addEventListener('click', () => {
        ul.removeChild(addNew);
        let form = document.createElement('input');
        ul.appendChild(form);
        form.addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
                let newProject = project(form.value);
                projectList.push(newProject);
                ul.removeChild(form);
                renderSidebar(projectList);
            }
        })
    })
}

export default renderSidebar