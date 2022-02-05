//Date code without Timezone :
// const end = new Date("February 02, 2022 11:20:00").getTime();

//Date code with Timezone UTC(GMT)+hh:mm :
/* new Date("yyyy-mm-ddThh:mm:ss+hh:mm"), where T is UTC.
Set Timezone: +01:00 is Paris Timezone, this is UTC(T)+01:00 */
const end = new Date("2022-02-09T23:59:59+01:00").getTime();

//Timer code :
const dayEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

const x = setInterval(function () {
  let now = new Date().getTime();
  const difference = end - now;

  if (difference < 0) {
    clearInterval(x);
    document.getElementById("done").innerHTML = "End text!!! Welcome! 🎉";
    return;
  }

  dayEl.innerText = Math.floor(difference / days);
  hoursEl.innerText = Math.floor((difference % days) / hours);
  minutesEl.innerText = Math.floor((difference % hours) / minutes);
  secondsEl.innerText = Math.floor((difference % minutes) / seconds);
}, seconds);

//Timer-2 code (added "_timer2" to variable names, except const end) :
const dayEl_timer2 = document.getElementById("days-timer2");
const hoursEl_timer2 = document.getElementById("hours-timer2");
const minutesEl_timer2 = document.getElementById("minutes-timer2");
const secondsEl_timer2 = document.getElementById("seconds-timer2");
const seconds_timer2 = 1000;
const minutes_timer2 = seconds_timer2 * 60;
const hours_timer2 = minutes_timer2 * 60;
const days_timer2 = hours_timer2 * 24;

const x_timer2 = setInterval(function () {
  let now_timer2 = new Date().getTime();
  const difference_timer2 = end - now_timer2;

  if (difference_timer2 < 0) {
    clearInterval(x_timer2);
    document.getElementById("done-timer2").innerHTML =
      "End text!!! Welcome! 🎉";
    return;
  }

  dayEl_timer2.innerText = Math.floor(difference_timer2 / days_timer2);
  hoursEl_timer2.innerText = Math.floor(
    (difference_timer2 % days_timer2) / hours_timer2
  );
  minutesEl_timer2.innerText = Math.floor(
    (difference_timer2 % hours_timer2) / minutes_timer2
  );
  secondsEl_timer2.innerText = Math.floor(
    (difference_timer2 % minutes_timer2) / seconds_timer2
  );
}, seconds_timer2);
