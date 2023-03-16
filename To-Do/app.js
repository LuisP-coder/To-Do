const container = document.querySelector('.container');
const add = document.querySelector('.add');
const ul = document.querySelector('ul');

add.addEventListener('click', () => {
    //Created Elements Section
    let createItem = document.createElement('li');
    createItem.classList.add('list');

    let spanList = document.createElement('span');
    spanList.classList.add('text')

    let newItem = document.querySelector('.new input').value;
    let itemValue = document.createTextNode(newItem);

    const deleteItem = document.createElement('button');
    deleteItem.classList.add('delete');
    deleteItem.innerHTML = '<i class="fa-solid fa-x"></i>';

    if(itemValue === ''){
        return;
    }

    //Adding elements
    spanList.appendChild(itemValue);
    createItem.appendChild(spanList);
    createItem.appendChild(deleteItem);
    ul.appendChild(createItem);


    //Done or delete
    if(deleteItem.addEventListener('click', () => {
        ul.removeChild(createItem);
    }));
});