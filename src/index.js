import todo from './todo';
import project from './project';

const todoItem = todo('title', 'take out the trash', 'May 1', 'High');
const sampleProject = project('projTitle', 'projDes', 'May 1', 'High');
sampleProject.addTodo(todoItem);
console.log(sampleProject.getTodos());
