import todo from './todo';
import project from './project';

const storageAvailable = (type) => {
    //From https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
const populateDummyContent = () => {
    //Dummy content
    let todoList = [];
    let projectList = [];
    const sampleProject = project('Clean the house');
    const sampleProject2 = project('Clean the garage');
    projectList.push(sampleProject)
    projectList.push(sampleProject2)
    const todoItem = todo('Take out the trash', 'take out the trash', 'May 1', true, sampleProject);
    const todoItem2 = todo('Do the dishes', 'do the dishes', 'May 2', false, sampleProject);
    todoList.push(todoItem);
    todoList.push(todoItem2);

    //save to localStorage
    localStorage.setItem('todoList', JSON.stringify(todoList));
    localStorage.setItem('projectList', JSON.stringify(projectList));
}

/*Converts localStorage JSON string to useable Javascript array*/
const convertStorageArray = (key) => {
    //convert JSON string to object
    let data = JSON.parse(localStorage.getItem(key))
    let array = []
    if (key == 'projectList') {
        for (let x = 0; x < data.length; x++) {
            let object = project(data[x].title);
            array.push(object);
        }
    } else {
        for (let y = 0; y < data.length; y++) {
            let object = todo(data[y].title, data[y].description, data[y].date, data[y].priority, data[y].project);
            array.push(object);
        }
    }
    return array;
}

const appendTodosToProject = (projectList, todoList) => {
    for (let z = 0; z < projectList.length; z++) {
        for (let n = 0; n < todoList.length; n++) {
            if (projectList[z].title == todoList[n].project.title) {
                projectList[z].addTodo(todoList[n]);
                todoList[n].project = projectList[z];
            }
        }
    }
}

export { storageAvailable, populateDummyContent, convertStorageArray, appendTodosToProject }