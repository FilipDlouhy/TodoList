import normalTaskArray from "./normalTasksArray";
import normalTaskDisplay from "./normalTaskDisplay";
import projetsArray from "./projectsArray";
import leCheck from "./leCHeck";
import addFunctionsToProjectTasks from "./addFunctionsToProjectTasks";
import project from "./projectOrNormal";


function filterDisplay(filter){
    let display = document.querySelector(".display");
    project = "both";
    let today = new Date();
    let todayString  = `${today.getFullYear()}-0${today.getMonth()+1}-${today.getDate()}`;
    if(today.getMonth()+1 <= 9){
        todayString  = `${today.getFullYear()}-0${today.getMonth()+1}-${today.getDate()}`
    }else{
        todayString  = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    }
    let monthString = todayString.slice(0,7);
 

    if(filter === "inbox"){
        project = "both";
        display.innerHTML = " ";
        normalTaskDisplay(normalTaskArray);
projetsArray.forEach((projects,index)=>{
    let projectIndex = index
    projects.tasks.forEach((task,index)=>{
     
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
})

 }
    
    if(filter === "today"){
        project = "both";
        display.innerHTML = " ";
normalTaskArray.forEach((task,index)=>{
    
    if(task.date ===todayString){
    
  
           let div = document.createElement("div");
        div.innerHTML =`  <div class="task" >
        <p class="compete-p">Complete    
        <input  class="task-complete" id="${index}" type="checkbox"></p>
      

        <h1 class="task-name">${task.title}</h1>
        <p class="task-description">
        ${task.description}
        </p>
        <input class="task-date" type="date" value="${task.date}">

        <button class="task-delete" id="${index}"><i class="fa-solid fa-x"></i></button>
        <button class="task-edit" id="${index}"><i class="fa-solid fa-pen-to-square"></i></button>
    </div>`
  
    display.appendChild(div);
   
    }
                                    })
                                 


   projetsArray.forEach((project,index)=>{
    let projectIndex =index;
 project.tasks.forEach((task,index)=>{
if(task.date ===todayString){
    
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
                                   
                                        }
                                    })
                                  })
                                  let tasks=  document.querySelectorAll(".task");
                                  tasks.forEach((task)=>task.style.backgroundColor="red");
                                  let tasksProject=  document.querySelectorAll(".task-project");
                                  tasksProject.forEach((task)=>task.style.backgroundColor="red");
    }

if (filter === "month"){
    console.log("yew")
    project = "both";
    display.innerHTML = " ";

    normalTaskArray.forEach((task,index)=>{
        let month = task.date.slice(0,7);
   console.log(month)
   console.log(monthString)
        if(monthString === month) {

           let div = document.createElement("div");
            div.innerHTML =`  <div class="task" >
            <p class="compete-p">Complete    
            <input  class="task-complete" id="${index}" type="checkbox"></p>
          
    
            <h1 class="task-name">${task.title}</h1>
            <p class="task-description">
            ${task.description}
            </p>
            <input class="task-date" type="date" value="${task.date}">
    
            <button class="task-delete" id="${index}"><i class="fa-solid fa-x"></i></button>
            <button class="task-edit" id="${index}"><i class="fa-solid fa-pen-to-square"></i></button>
        </div>`
        display.appendChild(div);
        }
                                        })
          projetsArray.forEach((project,index)=>{
            let projectIndex = index;
             project.tasks.forEach((task,index)=>{
                let month = task.date.slice(0,7);
                console.log(month)
                console.log(monthString)
         if(month ===monthString){
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
                                                                              
                  }
                  })
                 })

                                        let tasks=  document.querySelectorAll(".task");
                                        tasks.forEach((task)=>task.style.backgroundColor="blue");   
                                        let tasksProjects=  document.querySelectorAll(".task-project");
                                        tasksProjects.forEach((task)=>task.style.backgroundColor="blue");   
                                    
                                    
                                    
                                    }

                                        addFunctionsToProjectTasks()
                                        leCheck()
                                        project = "both"

}
export default filterDisplay;