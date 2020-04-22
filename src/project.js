//factory function for project object

const project = (title) => {
    const todos = []
    const addTodo = (todo) => todos.push(todo)
    const deleteTodo = (todo) => todos.splice(todo, 1);
    const getTodos = () => todos;
    return { title, addTodo, getTodos, deleteTodo }
}

export default project