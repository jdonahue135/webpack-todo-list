//factory function for todo object

const todo = (title, description, date, priority, project) => {
    let status = false;
    return { title, description, date, priority, status, project }
}

export default todo