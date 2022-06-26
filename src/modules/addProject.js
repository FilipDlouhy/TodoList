import projetsArray from "./projectsArray";
import Project from "./createProject";
import Task from "./createTask";
import addFunctionsToProjectTasks from "./addFunctionsToProjectTasks";
import leCheck from "./leCHeck";
import project from "./projectOrNormal";
import addFunctionsTobuttonsProjects from "./addFunctionsToProjects"
function createProject(){
    project= "project"
    let projectDisplay = document.querySelector(".projects");
    let container= document.querySelector(".container");
    let div = document.createElement("div");
    div.classList.add("modal-background")
    div.innerHTML = ` <div class ="form">
    <div>
        <label for="title">Title</label> <br>
        <input  id="title" type="text"> 
    </div>
    


    <div class="modalBTNS">
        <button class="modalBTN-cancel"> Cancel </button>
        <button class="modalBTN-add"> ADD </button>
  
    </div>
    </div>`;
container.appendChild(div)

let cancelBTN = document.querySelector(".modalBTN-cancel");
cancelBTN.addEventListener("click",()=>{
  
    let div =document.querySelector(".modal-background");
    div.remove();
});
let modalAddBTN = document.querySelector(".modalBTN-add")
modalAddBTN.addEventListener("click",()=>{

    let title = document.querySelector("#title");
   if(title.value == ''|| title.value == null){
    alert("filllll")
   }else{
    let project = new Project(title.value)
    projetsArray.push(project)    ;
    localStorage.setItem("projetsArray",JSON.stringify( projetsArray));

projectDisplay.innerHTML = " ";

projetsArray.forEach((project,index)=>{
    let div = document.createElement("div");
    div.classList.add("project-item");
    div.innerHTML =    `<h3 class="project-title" id="${index}">${project.title}</h3>
    <button class="add-task-project" data-id="${index}" id="${index}">Add</button>
    <button class="delete-project" data-id="${index}" id="${index}"><i class="fa-solid fa-x"></i></button>`
    projectDisplay.appendChild(div);
})

addFunctionsTobuttonsProjects()
let div =document.querySelector(".modal-background");
div.remove();


}})







}




export default createProject;
