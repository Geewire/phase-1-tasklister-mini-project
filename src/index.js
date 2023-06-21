document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form")
  form.addEventListener('submit', function(e){
    e.preventDefault();
    compileTasks(e.target.querySelector('#new-task-description').value)
    form.reset();
    let priority=e.target.priority.value
});
})

function compileTasks(tasksList){
  let orderedList = document.createElement('li')
  let btn = document.createElement('button')
  btn.textContent = " x"
  btn.addEventListener('click', handledelete)
  orderedList.textContent = (`${tasksList} `);
  orderedList.appendChild(btn);
  console.log(orderedList)

  document.querySelector('#tasks').appendChild(orderedList);

}

function handledelete(e){
  e.target.parentNode.remove()

}


let form = document.querySelector("#create-task-form");
let priority = document.createElement('select');
form.appendChild(priority);
let option1 = document.createElement('option');
let option2 = document.createElement('option');
let option3 = document.createElement('option');

option1.value ="High";
option1.text = "Priority : High";

option2.value ="Medium";
option2.text = "Priority : Medium";

option3.value ="Low";
option3.text = "Priority : Low";

priority.add(option1, null)
priority.add(option2, null)
priority.add(option3, null)

form.appendChild(priority);

priority.addEventListener('click', priorityColour(priority))

function priorityColour(priority){
 if (priority === option1) {
 tasksList = '#FFF000' 
  }if (priority === option2) {
    tasksList = '#FFF000';
  }if (priority === option3) {
   tasksList = '#27647B';
  }
}

