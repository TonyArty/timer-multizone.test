//Date code without Timezone :
// const end = new Date("February 02, 2022 11:20:00").getTime();

//Date code with Timezone UTC(GMT)+hh:mm :
/* new Date("yyyy-mm-ddThh:mm:ss+hh:mm"), where T is UTC.
Set Timezone: +01:00 is Paris Timezone, this is UTC(T)+01:00 */
const end = new Date("2022-02-19T23:59:59+01:00").getTime();

//Time variables :
const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

//Elements variables :
const timerDays = document.getElementsByClassName("timer-days");
const timerHours = document.getElementsByClassName("timer-hours");
const timerMinutes = document.getElementsByClassName("timer-minutes");
const timerSeconds = document.getElementsByClassName("timer-seconds");
const unitDays = document.getElementsByClassName("unit-days");
const unitHours = document.getElementsByClassName("unit-hours");
const unitMinutes = document.getElementsByClassName("unit-minutes");
const unitSeconds = document.getElementsByClassName("unit-seconds");
const timerText = document.getElementsByClassName("timer-text");

//Countdown definition and declension of words units of time :
const x = setInterval(function () {

  //Countdown definition
  let now = new Date().getTime();
  const difference = end - now;
  if (difference < 0) {
    clearInterval(x);
    Array.from(timerText).forEach(
      (timerTxt) => (timerTxt.innerText = "End text!!! Welcome! 🎉")
    );
    return;
  }

  //Displaying time in elements on the page :
  Array.from(timerDays).forEach(
    (timeDayEl) => (timeDayEl.innerText = Math.floor(difference / days))
  );
  Array.from(timerHours).forEach(
    (timeHourEl) => (timeHourEl.innerText = Math.floor((difference % days) / hours))
  );
  Array.from(timerMinutes).forEach(
    (timeMinuteEl) =>
      (timeMinuteEl.innerText = Math.floor((difference % hours) / minutes))
  );
  Array.from(timerSeconds).forEach(
    (timeSecondEl) =>
      (timeSecondEl.innerText = Math.floor((difference % minutes) / seconds))
  );

  //Declension of words units of time :
  var decCache = [],
      decCases = [2, 0, 1, 1, 1, 2];
  function decOfNum(number, titles)
  {
    if(!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
    return titles[decCache[number]];
  }

  //Displaying time units in elements on the page :
  Array.from(unitDays).forEach(
    (unitDayEl) => (unitDayEl.innerText = decOfNum(Math.floor(difference / days), ['day', 'days', 'days']))
  );
  Array.from(unitHours).forEach(
    (unitHourEl) => (unitHourEl.innerText = decOfNum(Math.floor((difference % days) / hours), ['hour', 'hours', 'hours']))
  );
  Array.from(unitMinutes).forEach(
    (unitMinuteEl) => (unitMinuteEl.innerText = decOfNum(Math.floor((difference % hours) / minutes), ['minute', 'minutes', 'minutes']))
  );
  Array.from(unitSeconds).forEach(
    (unitSecondEl) => (unitSecondEl.innerText = decOfNum(Math.floor((difference % minutes) / seconds), ['second', 'seconds', 'seconds']))
  );
}, seconds);