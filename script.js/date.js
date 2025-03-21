function displayDate() {
    let dateContainer = document.getElementById("date-container");

    function updateDate() {
        let now = new Date();
        let dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        let date = now.toLocaleDateString('en-US', options);

        dateContainer.innerHTML = `
            <div>${dayName}</div>
            <div class="font-bold">${date}</div>
        `;
    }

    updateDate();
    setInterval(updateDate, 1000);
}

displayDate();
