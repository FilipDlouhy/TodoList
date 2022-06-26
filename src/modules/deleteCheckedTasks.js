import normalTaskArray from "./normalTasksArray";
import normalTaskDisplay from "./normalTaskDisplay";
import projetsArray from "./projectsArray";
import project from "./projectOrNormal";
import leCheck from "./leCHeck";
import Task from "./createTask";
import addFunctionsToProjectTasks from "./addFunctionsToProjectTasks";

function deleteCheckedTasks(){
    let display = document.querySelector(".display");
 
  console.log(project)
let checkBoxes = document.querySelectorAll(".task-complete");
let checkBoxesProject = document.querySelectorAll(".task-complete-project");
if(project === "normal"){
    checkBoxes.forEach((box)=>{
        let index = box.id;
        if(box.checked === true){
            normalTaskArray.splice(index,1);
            
localStorage.setItem("normalTaskArray" ,JSON.stringify( normalTaskArray))
           normalTaskDisplay(normalTaskArray)
        }
    
    })
}
if(project === "project"){
     let projetIndex= display.id;
     let pole = projetsArray[projetIndex].tasks
     console.log(pole);

    checkBoxesProject.forEach((box,index)=>{
      
     
    
    
      

        if(box.checked === true){
          pole.splice(index,1);
      
localStorage.setItem("projetsArray" ,JSON.stringify( projetsArray))
        } 
        
   
          })
          display.innerHTML = " ";
          pole.forEach((task,index)=>{
            let div = document.createElement("div");
            div.setAttribute("id",projetIndex)
        div.innerHTML =`  <div class="task-project" id="${projetIndex}" >
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
         leCheck()
        addFunctionsToProjectTasks()
          console.log(pole);
}
if(project === "both"){
display.innerHTML = " ";
    checkBoxes.forEach((box)=>{
        let index = box.id;
        if(box.checked === true){
            normalTaskArray.splice(index,1);
            localStorage.setItem("normalTaskArray" ,JSON.stringify( normalTaskArray))
        }
    
    })
    

let pole;
let boxes = Array.from( checkBoxesProject)
for (let i = 0; i < boxes.length; i++) {
let projectIndex = boxes[i].parentElement.parentElement.id;
if(boxes[i].checked == true){
projetsArray[projectIndex].tasks.splice(boxes[i].id,1)

localStorage.setItem("projetsArray" ,JSON.stringify( projetsArray))
}

}
normalTaskDisplay(normalTaskArray)
projetsArray.forEach((project,index)=>{
  let projectndex = index;
    project.tasks.forEach((task)=>{
    let div = document.createElement("div");
    div.setAttribute("id",projectndex)
div.innerHTML =`  <div class="task-project" id="${projectndex }" >
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
})
 
leCheck();
addFunctionsToProjectTasks();

}

}
export default deleteCheckedTasks






/*display.innerHTML= " ";
array.forEach((task,index)=>{
    let div = document.createElement("div");
    div.setAttribute("id",projetIndex)
div.innerHTML =`  <div class="task-project" id="${projetIndex}" >
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
   })*/