import { storageAvailable, populateDummyContent, convertStorageArray, appendTodosToProject } from './localStorage'
import { render } from './render';

//configure localStorage
if (storageAvailable('localStorage')) {
    if (!localStorage.getItem('projectList')) {
        //save dummy todoList and projectList in local storage
        populateDummyContent()
    }

    //make todo and project objects from JSON
    let projectList = convertStorageArray('projectList');
    let todoList = convertStorageArray('todoList');
    appendTodosToProject(projectList, todoList);

    render(projectList, todoList);
}