function completeTask(id) {
    let taskCount =document.getElementById(id).innerText
    let convertedTaskCount=parseInt(taskCount);
    if (convertedTaskCount===0) {
        alert("Congrates ! You have completed all current  task");
        
    }
  }