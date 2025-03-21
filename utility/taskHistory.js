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



