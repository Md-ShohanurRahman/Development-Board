// function taskHistory(id) {
//     let historyContainer=document.getElementById(id);
//     let titlePart=document.getElementById("title-part").innerText;
//     console.log(titlePart);
//     let makeTaskHistory = document.createElement("div");
//     makeTaskHistory.classList.add("history-title");
//     makeTaskHistory.innerText= `
//      You have Complete The Task ${titlePart}  at ${getCurrentTime()}
          
//           `;
//           historyContainer.appendChild(makeTaskHistory);
          
//   }



//   function taskHistory(id) {
//     let historyContainer = document.getElementById(id);
//     let titleParts = document.querySelectorAll(".title-part"); // Select all elements with class "title-part"

//     titleParts.forEach((titlePart) => {
//         let makeTaskHistory = document.createElement("div");
//         makeTaskHistory.classList.add("history-title");
//         makeTaskHistory.innerText = `
//         You have completed the task ${titlePart.innerText} at ${getCurrentTime()}
//         `;
//         historyContainer.appendChild(makeTaskHistory);
//     });
// }
let currentIndex = 0;

function taskHistory(id) {
    let historyContainer = document.getElementById(id);
    let titleParts = document.querySelectorAll(".title-part");

    if (currentIndex < titleParts.length) {
        let makeTaskHistory = document.createElement("div");
        makeTaskHistory.classList.add("history-title");
        makeTaskHistory.innerText = `
        You have completed the task ${titleParts[currentIndex].innerText} at ${getCurrentTime()}
        `;
        historyContainer.appendChild(makeTaskHistory);
        currentIndex++;
    }
}



