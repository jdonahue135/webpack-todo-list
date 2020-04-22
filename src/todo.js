//factory function for todo object

const todo = (title, description, date, priority) => {
    let status = false;
    return { title, description, date, priority, status }
}

export default todo