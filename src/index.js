

import showModal from "./modules/showModal"
import deleteCheckedTasks from "./modules/deleteCheckedTasks";
import normalTaskDisplay from "./modules/normalTaskDisplay";
import normalTaskArray from "./modules/normalTasksArray";
import filterDisplay from "./modules/filterDisplay"
import addProject from "./modules/addProject";
import project from "./modules/projectOrNormal"
import displayFromStorage from "./modules/displayFromLocaslStorage"

window.addEventListener("load",()=>{
    project = "normal";
    displayFromStorage();
});


let addTaskBTN= document.querySelector(".add-task");
addTaskBTN.addEventListener("click",()=>{
    showModal();

});
let deleteCheckedTasksBTN = document.querySelector(".delete-completed");
deleteCheckedTasksBTN.addEventListener("click",()=>{
    deleteCheckedTasks();
  
});

let filterOptions = document.querySelectorAll(".options-item");
filterOptions.forEach((option)=>{
    option.addEventListener("click",(event)=>{
        if ( event.target.parentElement.id=== "month"){
           filterDisplay("month")
        }
        if ( event.target.parentElement.id=== "inbox"){
            filterDisplay("inbox")
         }
         if ( event.target.parentElement.id=== "today"){
            filterDisplay("today")
         }
    })
})


let createProjectBTN = document.querySelector(".add-project");
createProjectBTN.addEventListener("click",addProject);