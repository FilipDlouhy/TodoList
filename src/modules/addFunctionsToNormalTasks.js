import normalTaskArray from "./normalTasksArray";
import normalTaskDisplay from "./normalTaskDisplay";
import Task from "./createTask";
import project from "./projectOrNormal";
function addFunctionsToNormalTasks(){
  project = "normal";
    let deleteButtons = document.querySelectorAll(".task-delete");
    deleteButtons.forEach((button)=>{
      button.addEventListener("click",(event)=> {
        let index  = event.target.id;
        normalTaskArray.splice(index,1)
        localStorage.setItem("normalTaskArray",JSON.stringify( normalTaskArray))
        normalTaskDisplay(normalTaskArray);
      
      })  
    
    
    })

let editButtons = document.querySelectorAll(".task-edit");
editButtons.forEach((button)=>{
  button.addEventListener("click",(event)=>{
    let index  = event.target.id;
    let container= document.querySelector(".container");
    let div = document.createElement("div");
    div.classList.add("modal-background")
    div.innerHTML = ` 
    <div class ="form">
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


    <div class="modalBTNS">
        <button class="modalBTN-cancel"> Cancel </button>
   
        <button class="modalBTN-edit" id="${index}"> Edit</button>
    </div>
    </div>`;

container.appendChild(div);
  

let cancelBTN = document.querySelector(".modalBTN-cancel");
cancelBTN.addEventListener("click",()=>{
  
    let div =document.querySelector(".modal-background");
    div.remove();
});



let editBTN = document.querySelector(".modalBTN-edit");
editBTN.addEventListener("click",(event)=>{
   let index = event.target.id;
  let date = document.getElementById("date");
  let title = document.getElementById("title");
  let description = document.getElementById("description");
  if(date.value =='' || title.value =='' || description.value == ''||date.value == null || title.value == null || description.value == null){
    alert("FILLLLLLLLLLL");
  }else{
    let task = new Task(title.value, date.value,description.value);
    normalTaskArray.splice(event.target.id,1,task);
    localStorage.setItem("projetsArray",JSON.stringify( normalTaskArray))
  console.log(normalTaskArray);
  
  
    let div =document.querySelector(".modal-background");
    div.remove();
    normalTaskDisplay(normalTaskArray)
  }

})







})
})


        
}

export default addFunctionsToNormalTasks

