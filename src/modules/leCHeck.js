

function leCheck (){
    let dates = document.querySelectorAll(".task-date");
    dates.forEach((date)=>{
        let todayString;
        let today = new Date();
        if(today.getMonth()+1 <=9){
            todayString  = `${today.getFullYear()}-0${today.getMonth()+1}-${today.getDate()}`
        }else{
            todayString  = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
        }
    let monthString = todayString.slice(0,7);
    let month = date.value.slice(0,7);

    if(monthString === month){
        date.parentElement.style.backgroundColor ="blue";
    }

        if(todayString === date.value){
            date.parentElement.style.backgroundColor ="red";
        }
       

   //2022-06-18
    })
}
export default leCheck
