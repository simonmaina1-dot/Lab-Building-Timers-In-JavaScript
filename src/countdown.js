// src/countdown.js
function countdownTimer(startTime, interval) {
  let remaining = startTime;

  const timerId = setInterval(() => {
    console.log(remaining);
    remaining--;

    if (remaining < 0) {
      clearInterval(timerId);
    }
  }, interval);

  return timerId;
}

// export as default function and also as named prop to support both import styles
module.exports = countdownTimer;
module.exports.countdownTimer = countdownTimer;
