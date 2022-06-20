const todoText = document.getElementById("todo-text");
const todoul = document.getElementById("todo-ul");

function addtask(){
    
    if(todoText.value.trim() === ''){
        alert("Enter valid value")
    }
    else{
        console.log(todoText.value.trim());
        const liTag = document.createElement('li');
        const spanText = document.createElement('span');
        const textNode = document.createTextNode(todoText.value.trim());
        spanText.append(textNode);
        spanText.addEventListener('click', (e) =>{
            e.target.classList.toggle('done')
        })
        const spanClose = document.createElement('span');
        spanClose.classList.add('close');
        spanClose.innerHTML = '&times';
        spanClose.addEventListener('click', (e) =>{
            const li = e.target.parentElement;
            li.parentElement.removeChild(li);
        })
        liTag.appendChild(spanText);
        liTag.appendChild(spanClose);
        todoul.append(liTag);
        todoText.value ="";

    }
}