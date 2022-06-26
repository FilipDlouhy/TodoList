import normalTaskArray from "./normalTasksArray";
import normalTaskDisplay from "./normalTaskDisplay";
import Task from "./createTask";
import addFunctionsToNormalTasks from "./addFunctionsToNormalTasks";
import project from "./projectOrNormal";

function showModal(){
    let container= document.querySelector(".container");
    let div = document.createElement("div");
    div.classList.add("modal-background")
    div.innerHTML = ` <div class ="form">
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
modalAddBTN.addEventListener("click",addTask)

}









function addTask(){
    let date = document.querySelector("#date");
    let title = document.querySelector("#title");
    let description = document.querySelector("#description");
    if(date.value =='' || title.value =='' || description.value == ''||date.value == null || title.value == null || description.value == null){
        alert("FILLLLLLLLLLL");
      }else{
        let task = new Task(title.value, date.value,description.value);

        normalTaskArray.push(task)
          localStorage.setItem("normalTaskArray",JSON.stringify( normalTaskArray))
        normalTaskDisplay (normalTaskArray)
      
      let div =document.querySelector(".modal-background");
      div.remove();
      console.log("jaj")
      
      project = "normal"
      }
    
}
export default showModal