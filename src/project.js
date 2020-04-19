//factory function for project object

const project = (title) => {
    const todos = []
    const getTitle = () => title;
    const addTodo = (todo) => todos.push(todo)
    const getTodos = () => todos;
    return { getTitle, addTodo, getTodos }
}

export default project