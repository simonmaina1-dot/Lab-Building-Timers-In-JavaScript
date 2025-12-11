// src/reminder.js
function delayedReminder(message, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(message);
      resolve(message);
    }, delay);
  });
}

// export as default function and also as named prop to support both import styles
module.exports = delayedReminder;
module.exports.delayedReminder = delayedReminder;
