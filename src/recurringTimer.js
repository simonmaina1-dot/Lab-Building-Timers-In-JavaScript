// src/recurringTimer.js
function recurringTimer(message, interval) {
  const timerId = setInterval(() => {
    console.log(message);
  }, interval);

  return timerId;
}

function stopRecurringTimer(timerId) {
  clearInterval(timerId);
}

// export the main function as default and attach both functions as properties
module.exports = recurringTimer;
module.exports.recurringTimer = recurringTimer;
module.exports.stopRecurringTimer = stopRecurringTimer;
