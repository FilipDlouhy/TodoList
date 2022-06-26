import addFunctionsToNormalTasks from "./addFunctionsToNormalTasks";
import leCheck from "./leCHeck";
import project from "./projectOrNormal";
function normalTaskDisplay (normalTasks){
    let display = document.querySelector(".display");
    display.innerHTML = " ";
    normalTasks.forEach((task,index)=>{
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
 
    })
    addFunctionsToNormalTasks();
    leCheck();
    project = "normal"
}
export default normalTaskDisplay