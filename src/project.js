//factory function for project object

const project = (title, description, dueDate, priority) => {
    const todos = []
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const addTodo = (todo) => {
        todos.push(todo);
    }
    const getTodos = () => todos;
    return { getTitle, getDescription, getDueDate, getPriority, addTodo, getTodos }
}

export default project