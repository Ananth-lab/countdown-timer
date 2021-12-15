let countDays = document.querySelector(".section_day")
let countHours = document.querySelector(".section_hour")
let countMinutes = document.querySelector(".section_min")
let countSeconds = document.querySelector(".section_sec")
const newYear = "1 Jan 2022"

function countdown(){
    const newYearDate = new Date(newYear)
    const currentDate = Date.now()
    let secs = (newYearDate - currentDate)/1000
    let days = Math.floor(secs / 3600 / 24)
    let hours = Math.floor(secs / 3600 % 24)
    let mins = Math.floor((secs / 60)% 60)
    let sec = Math.floor(secs % 60)
    console.log(days, hours, mins, sec)
    countHours.textContent = hours;
    countMinutes.textContent = mins;
    countSeconds.textContent = sec;
    countDays.textContent = days;
}
setInterval(countdown, 1000)
