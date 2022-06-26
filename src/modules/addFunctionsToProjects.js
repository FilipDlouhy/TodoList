
import project from "./projectOrNormal";
import projetsArray from "./projectsArray";
import Task from "./createTask";
import addFunctionsToProjectTasks from "./addFunctionsToProjectTasks";
import leCheck from "./leCHeck";
function addFunctionsTobuttonsProjects(){
    project = "project"
    var projectDisplay = document.querySelector(".projects")
    var display = document.querySelector(".display")
    let showProjectTasks= document.querySelectorAll(".project-title");

    showProjectTasks.forEach((projectTitle)=>{
        projectTitle.addEventListener("click",(event)=>{
          console.log("FUNGUJU")
            let projectIndex = event.target.id;
          
           let display =  document.querySelector(".display");
           display.setAttribute("id",projectIndex)
            display.innerHTML = `  <div class="task-project" >
          <h2>${event.target.innerHTML}</h2>
         </div>` ;
    
        let array = projetsArray[projectIndex].tasks;
        array.forEach((task,index)=>{
             let div = document.createElement("div");
             div.setAttribute("id",projectIndex)
             div.innerHTML =`  <div class="task-project" id="${projectIndex}" >
             <p class="compete-p">Complete    
             <input  class="task-complete-project" id="${index}" type="checkbox"></p>
           
         
             <h1 class="task-name">${task.title}</h1>
             <p class="task-description">
             ${task.description}
             </p>
             <input class="task-date" type="date" value="${task.date}">
         
             <button class="task-delete-project" id="${index}"><i class="fa-solid fa-x"></i></button>
             <button class="task-edit-project" id="${index}"><i class="fa-solid fa-pen-to-square"></i></button>
         </div>`;
         display.appendChild(div);
    
         })

         addFunctionsToProjectTasks()
         leCheck()
         })
         
    })
    
    let addTaskToProject = document.querySelectorAll(".add-task-project");
    addTaskToProject.forEach((btn)=>{
      
          btn.addEventListener("click",(event)=>{
         let projectTitle = event.target.parentElement
              let index = event.target.id;
              let array = projetsArray[index].tasks;
              let container= document.querySelector(".container");
              let div = document.createElement("div");
              div.classList.add("modal-background")
              div.innerHTML = `<div class ="form">
              <div>
                  <label for="title">Title</label> <br>
                  <input  id="title" type="text"> 
              </div>
              <div>
                  <h2>Description</h2>
                  <textarea name="" id="description" maxlength="100" cols="40" rows="10"></textarea>
              </div>
              <div>
              <input id="date" type="date">
          </div>
          
          
              <div class="modalBTNS">
                  <button class="modalBTN-cancel"> Cancel </button>
                  <button class="modalBTN-add"  data-id="${index}" id="${index}"> ADD </button>
              
              </div>
              </div>`;
          container.appendChild(div)
          
          let cancelBTN = document.querySelector(".modalBTN-cancel");
          cancelBTN.addEventListener("click",()=>{
            
              let div =document.querySelector(".modal-background");
              div.remove();
          });
          
          let modalAddBTN = document.querySelector(".modalBTN-add")
          modalAddBTN.addEventListener("click",(event)=>{
            if(date.value =='' || title.value =='' || description.value == ''||date.value == null || title.value == null || description.value == null){
                alert("FILLLLLLLLLLL");
              }else{
                let display = document.querySelector(".display");
             let date = document.querySelector("#date");
              let title = document.querySelector("#title");
              let description = document.querySelector("#description");
              
              let task = new Task(title.value, date.value,description.value);
          
          array.push(task);
     localStorage.setItem("projetsArray",JSON.stringify( projetsArray))
    
    
          display.innerHTML = ` <div class="task-project" >
          <h2>${projectTitle.firstChild.innerHTML}</h2>
         </div>` ;
    
    
         var projectIndex = event.target.id;
    
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
    
              let div =document.querySelector(".modal-background");
              div.remove();
              display.setAttribute("id",projectIndex)
              addFunctionsToProjectTasks()
              leCheck();
         
              }
          
           })
     
     })
      })
     let deleteProject = document.querySelectorAll(".delete-project");
     
      deleteProject.forEach((button)=>{
    
            button.addEventListener("click",(event)=>{
                let index =event.target.id;
          
    projetsArray.splice(index,1)
    localStorage.setItem("projetsArray",JSON.stringify( projetsArray));
    projectDisplay.innerHTML =" ";
    display.innerHTML=" ";
    projetsArray.forEach((project,index)=>{
    
        let div = document.createElement("div");
        div.classList.add("project-item");
        div.innerHTML =    `<h3 class="project-title" id="${index}">${project.title}</h3>
        <button class="add-task-project" data-id="${index}" id="${index}">Add</button>
        <button class="delete-project" data-id="${index}" id="${index}"><i class="fa-solid fa-x"></i></button>`
        projectDisplay.appendChild(div);
    })
addFunctionsTobuttonsProjects();

}
    )
    
    })
   
  
    }
export default addFunctionsTobuttonsProjects