import todo from './todo';

/* render detail div for selected todo*/

const renderDetail = (todoItem) => {
    const detail = document.querySelector('#detail');
    
    //remove current content
    let element = detail.lastElementChild;
    while (element) {
        detail.removeChild(detail.lastElementChild);
        element = detail.lastElementChild;
    }

    if (!todoItem) {
        const message = document.createElement('h2');
        message.textContent = 'Create a Todo to see details!'
        detail.appendChild(message);

    } else {
        //populate div with todo info
        const h3 = document.createElement('h3');
        h3.textContent = todoItem.getTitle();
        detail.appendChild(h3);
    }
}

export default renderDetail