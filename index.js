function updateClock() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  let period = hours < 12 ? 'AM' : 'PM';

  hours = hours % 12;

  let timeString = hours + ':' + minutes + ':' + seconds + ' ' + period;

  document.querySelector('.clock').textContent = timeString;
};

updateClock();
setInterval(updateClock, 1000);
;