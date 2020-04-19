import todo from './todo';

/* render detail div for selected todo*/

const renderDetail = (todoItem) => {
    //remove current content
    const detail = document.querySelector('#detail');
    let element = detail.lastElementChild;
    while (element) {
        detail.removeChild(detail.lastElementChild);
        element = detail.lastElementChild;
    }

    //populate div with todo info
    const h3 = document.createElement('h3');
    h3.textContent = todoItem.getTitle();
    detail.appendChild(h3);
}

export default renderDetail