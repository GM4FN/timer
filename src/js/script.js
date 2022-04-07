"use strict";

let countdown = {
  settingNumbers() {
    let minutesCounter = 0,
      hoursCounter = 0,
      daysCounter = 0,
      numberDays = document.querySelector(".countdown__number-days"),
      numberHours = document.querySelector(".countdown__number-hours"),
      numberMinutes = document.querySelector(".countdown__number-minutes"),
      numberSeconds = document.querySelector(".countdown__number-seconds"),
      secondsCounter = Math.ceil(
        Math.abs(
          new Date(2022, 5, 1, 0, 0, 0).getTime() - new Date().getTime()
        ) / 1000
      );
    while (secondsCounter >= 60) {
      secondsCounter -= 60;
      minutesCounter++;
    }

    while (minutesCounter >= 60) {
      minutesCounter -= 60;
      hoursCounter++;
    }

    while (hoursCounter >= 24) {
      hoursCounter -= 24;
      daysCounter++;
    }
    numberDays.textContent = daysCounter;
    numberHours.textContent = hoursCounter;
    numberMinutes.textContent = minutesCounter;
    numberSeconds.textContent = secondsCounter;
    return this.settingNumbers;
  },

  settingInterval() {
    setInterval(this.settingNumbers(), 1000);
  },
};

countdown.settingInterval();
