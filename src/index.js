import todo from './todo';
import project from './project';
import renderSidebar from './renderSidebar';
import renderMain from './renderMain';


//Storage for projects and todo items during development
let projectList = []

//dummy content to test app
const sampleProject = project('Clean the house', 'projDes', 'May 1', 'High');
const sampleProject2 = project('Clean the garage', 'projDescriptionn', 'May 1', 'High');

projectList.push(sampleProject);
projectList.push(sampleProject2);

const todoItem = todo('Take out the trash', 'take out the trash', 'May 1', 'High');
const todoItem2 = todo('Do the dishes', 'Do the dishes', 'May 1', 'High');



sampleProject.addTodo(todoItem);
sampleProject.addTodo(todoItem2);


renderSidebar(projectList);
renderMain(sampleProject);