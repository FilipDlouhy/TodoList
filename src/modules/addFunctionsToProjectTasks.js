
import projetsArray from "./projectsArray";
import Task from "./createTask"
import project from "./projectOrNormal";
import leCheck from "./leCHeck";
function addFunctionsToProjectTasks(){
  project = "project"
  let display = document.querySelector(".display");
    let deleteButtons = document.querySelectorAll(".task-delete-project");
    let array =projetsArray[deleteButtons[0].parentElement.parentElement.id].tasks;
    deleteButtons.forEach((button)=>{
      button.addEventListener("click",(event)=> {
        let projectIndex  = event.target.parentElement.parentElement.id;
        let taskIndex = event.target.id;
   
        array.splice(taskIndex,1)
        localStorage.setItem("projetsArray",JSON.stringify( projetsArray))
        display.innerHTML = " ";
   
        display.setAttribute("id",projectIndex)
         display.innerHTML = `  <div class="task-project" >
       <h2>${projetsArray[projectIndex].title}</h2>
      </div>` ;
        array.forEach((task,index)=>{
       
            let div = document.createElement("div");
            div.setAttribute("id",projectIndex);
            div.innerHTML =`  <div class="task-project" data-id="${index}"  id='${index}'>
            <p class="compete-p">Complete    
            <input  class="task-complete-project" id="${index}" type="checkbox"></p>
          
    
            <h1 class="task-name">${task.title}</h1>
            <p class="task-description">
          ${task.description}
            </p>
            <input class="task-date" type="date" value="${task.date}">
    
            <button class="task-delete-project" data-id="${projectIndex}" id="${index}"><i class="fa-solid fa-x"></i></button>
            <button class="task-edit-project" data-id="${projectIndex}" id="${index}"><i class="fa-solid fa-pen-to-square"></i></button>
        </div>`
        display.appendChild(div);
     
        })
        leCheck();
        addFunctionsToProjectTasks();
      })  
    
    
    })



    let editButtons = document.querySelectorAll(".task-edit-project");
    editButtons.forEach((button)=>{
      button.addEventListener("click",(event)=>{
        let projectIndex  = event.target.parentElement.parentElement.parentElement.id;
       
        let taskIndex = event.target.parentElement.id;
        console.log( event.target.parentElement.parentElement.parentElement);
        console.log(projectIndex);
        let container= document.querySelector(".container");
        let div = document.createElement("div");
        div.classList.add("modal-background")
        div.innerHTML = ` <div class ="form">
        <div>
            <label for="title">Title</label> <br>
            <input  id="title" type="text" value=""> 
        </div>
        <div>
            <h2>Description</h2>
            <textarea name="" id="description" cols="40" maxlength="100" rows="10"></textarea>
        </div>
        <div>
        <input id="date" type="date" >
    </div>
    
    
        <div class="modalBTNS" data-id="${projectIndex}" >
            <button class="modalBTN-cancel"> Cancel </button>
          
            <button class="modalBTN-edit" id=${taskIndex}> Edit</button>
        </div>
        </div>`;
    
        
    container.appendChild(div);
    
    let ELCHADDIV = document.querySelector(".modalBTNS");
    ELCHADDIV.setAttribute("id",projectIndex);
   

    
    let cancelBTN = document.querySelector(".modalBTN-cancel");
    cancelBTN.addEventListener("click",()=>{
      
        let div =document.querySelector(".modal-background");
        div.remove();
    });
    
    
    
    let editBTN = document.querySelector(".modalBTN-edit");
    editBTN.addEventListener("click",(event)=>{
        let projectIndex  = event.target.parentElement.id;
        let taskIndex = event.target.id;
        
       let array =   projetsArray[projectIndex].tasks;
      
      let date = document.getElementById("date");
      let title = document.getElementById("title");
      let description = document.getElementById("description");
      if(date.value =='' || title.value =='' || description.value == ''||date.value == null || title.value == null || description.value == null){
        alert("FILLLLLLLLLLL");
      }else{
      let task = new Task(title.value, date.value,description.value);
      array.splice(taskIndex,1,task);
    
      localStorage.setItem("projetsArray",JSON.stringify( projetsArray))
    
      let div =document.querySelector(".modal-background");
      div.remove();
      display.innerHTML = " ";
      console.log(array);
      let display =  document.querySelector(".display");
      display.setAttribute("id",projectIndex)
       display.innerHTML = `  <div class="task-project" >
     <h2>${event.target.innerHTML}</h2>
    </div>` ;
      array.forEach((task,index)=>{
       
        let div = document.createElement("div");
        div.setAttribute("id",projectIndex);
        div.innerHTML =`  <div class="task-project" data-id="${index}"  id='${index}'>
        <p class="compete-p">Complete    
        <input  class="task-complete-project" id="${index}" type="checkbox"></p>
      

        <h1 class="task-name">${task.title}</h1>
        <p class="task-description">
      ${task.description}
        </p>
        <input class="task-date" type="date" value="${task.date}">

        <button class="task-delete-project" data-id="${projectIndex}" id="${index}"><i class="fa-solid fa-x"></i></button>
        <button class="task-edit-project" data-id="${projectIndex}" id="${index}"><i class="fa-solid fa-pen-to-square"></i></button>
    </div>`
    display.appendChild(div);
 
    })
    addFunctionsToProjectTasks();
    leCheck();
       } })
    
    
    
    
    
    
    
    })
    })

    
}
export default addFunctionsToProjectTasks;