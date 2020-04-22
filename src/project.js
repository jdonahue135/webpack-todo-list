//factory function for project object

const project = (title) => {
    const todos = []
    const addTodo = (todo) => todos.push(todo)
    const deleteTodo = (todo) => todos.splice(todos.indexOf(todo), 1);
    const updateTodo = (todo, newTodo) => todos.splice(todos.indexOf(todo), 1, newTodo)
    const getTodos = () => todos;
    return { title, addTodo, getTodos, deleteTodo, updateTodo }
}

export default project