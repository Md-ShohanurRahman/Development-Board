document.querySelectorAll(".check-complete").forEach(button => {
    button.addEventListener("click", function () {
        this.disabled = true;
        this.style.opacity = "0.15";
        this.style.cursor = "not-allowed";
        alert("Board Updated Successfully");
        
        assignTask("taskNumber");
        completedTaskCount("completed-task-number");
        taskHistory("TaskHistory");
        completeTask("taskNumber");
    });
});
