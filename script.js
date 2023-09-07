document.addEventListener("DOMContentLoaded", function () {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    const currentUTCTime = currentDate.toUTCString();

    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = currentDayOfWeek;
    document.querySelector("[data-testid='currentUTCTime']").textContent = currentUTCTime;
});