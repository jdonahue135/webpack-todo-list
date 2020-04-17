//factory function for todo object

const todo = (title, description, dueDate, priority) => {
    let status = false;
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority
    const getStatus = () => status;
    const doTask = () => this.status = true;
    return { getTitle, getDescription, getDueDate, getPriority, getStatus, doTask }
}

export default todo