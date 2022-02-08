//Date code without Timezone :
// const end = new Date("February 02, 2022 11:20:00").getTime();

//Date code with Timezone UTC(GMT)+hh:mm :
/* new Date("yyyy-mm-ddThh:mm:ss+hh:mm"), where T is UTC.
Set Timezone: +01:00 is Paris Timezone, this is UTC(T)+01:00 */
const end = new Date("2022-02-15T23:59:59+01:00").getTime();

//Timer code :
const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;
const timerDays = document.getElementsByClassName("timer-days");
const timerHours = document.getElementsByClassName("timer-hours");
const timerMinutes = document.getElementsByClassName("timer-minutes");
const timerSeconds = document.getElementsByClassName("timer-seconds");
const timerText = document.getElementsByClassName("timer-text");

const x = setInterval(function () {
  let now = new Date().getTime();
  const difference = end - now;

  if (difference < 0) {
    clearInterval(x);
    Array.from(timerText).forEach(
      (timerTxt) => (timerTxt.innerText = "End text!!! Welcome! 🎉")
    );
    return;
  }

  Array.from(timerDays).forEach(
    (dayEl) => (dayEl.innerText = Math.floor(difference / days))
  );
  Array.from(timerHours).forEach(
    (hoursEl) => (hoursEl.innerText = Math.floor((difference % days) / hours))
  );
  Array.from(timerMinutes).forEach(
    (minutesEl) =>
      (minutesEl.innerText = Math.floor((difference % hours) / minutes))
  );
  Array.from(timerSeconds).forEach(
    (secondsEl) =>
      (secondsEl.innerText = Math.floor((difference % minutes) / seconds))
  );
}, seconds);
