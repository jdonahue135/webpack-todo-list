import todo from './todo';
import project from './project';
import { render } from './render';


//Storage for projects and todo items during development
let projectList = []

//dummy content to test app
const sampleProject = project('Clean the house');
const sampleProject2 = project('Clean the garage');
projectList.push(sampleProject);
projectList.push(sampleProject2);
const todoItem = todo('Take out the trash', 'take out the trash', 'May 1', true, sampleProject);
const todoItem2 = todo('Do the dishes', 'do the dishes', 'May 2', false, sampleProject);
sampleProject.addTodo(todoItem);
sampleProject.addTodo(todoItem2);


render(projectList);