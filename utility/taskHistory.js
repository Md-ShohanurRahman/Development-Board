function taskHistory(id) {
    let historyContainer=document.getElementById(id);
    let titlePart=document.getElementById("title-part").innerText;
    console.log(titlePart);
    let makeTaskHistory = document.createElement("div");
    makeTaskHistory.classList.add("history-title");
    makeTaskHistory.innerText= `
     You have Complete The Task ${titlePart}  at ${getCurrentTime()}
          
          `;
          historyContainer.appendChild(makeTaskHistory);
          
  }