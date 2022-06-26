import projetsArray from "./projectsArray"
import normalTaskDisplay from "./normalTaskDisplay"

import addFunctionsTobuttonsProjects from "./addFunctionsToProjects"
import leCheck from "./leCHeck"
import normalTaskArray from "./normalTasksArray"
function displayFromStorage(){
    if(localStorage.getItem("projetsArray") === null  || localStorage.getItem("normalTaskArray") === null ){
        projetsArray = [];
        normalTaskArray =   [];
        } else{
       
          projetsArray = JSON.parse(localStorage.getItem("projetsArray"));
          
            normalTaskArray = JSON.parse( localStorage.getItem("normalTaskArray"));
            normalTaskDisplay(normalTaskArray);
     
            let projectDisplay = document.querySelector(".projects");
            projectDisplay.innerHTML = " ";
        
        projetsArray.forEach((project,index)=>{
            let div = document.createElement("div");
            div.classList.add("project-item");
            div.innerHTML =    `<h3 class="project-title" id="${index}">${project.title}</h3>
            <button class="add-task-project" data-id="${index}" id="${index}">Add</button>
            <button class="delete-project" data-id="${index}" id="${index}"><i class="fa-solid fa-x"></i></button>`
            projectDisplay.appendChild(div)})
            
        }
        addFunctionsTobuttonsProjects()
     
        leCheck()
}

export default displayFromStorage