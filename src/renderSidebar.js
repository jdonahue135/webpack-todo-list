import project from './project';
import renderMain from './renderMain';
import renderDetail from './renderDetail';
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
        li.textContent = projectList[x].getTitle();
        ul.appendChild(li);
        li.addEventListener('click', () => {
            renderMain(projectList[x])
            console.log(projectList[x].getTodos()[0])
            renderDetail(projectList[x].getTodos()[0])
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

export default renderSidebar