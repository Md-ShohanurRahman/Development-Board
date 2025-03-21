 
 function assignTask(id) {
  let taskCount =document.getElementById(id).innerText
  let convertedTaskCount=parseInt(taskCount);
  let newTaskCount=convertedTaskCount-1;
  document.getElementById(id).innerText=newTaskCount;
}
 function completedTaskCount(id) {
    let completedTaskCount =document.getElementById(id).innerText
  let convertedCompletedTaskCount=parseInt(completedTaskCount);
  let newCompletedTaskCount=convertedCompletedTaskCount+1;
  document.getElementById(id).innerText=newCompletedTaskCount;
 }

