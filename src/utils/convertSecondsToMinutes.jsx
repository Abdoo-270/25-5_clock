export const convertSecondsToMinutes = (seconds) => {
  var minutes = Math.floor(seconds / 60); // Get the whole number of minutes
  var remainingSeconds = seconds % 60; // Get the remaining seconds

  // Add leading zeros if necessary
  var minutesString = minutes < 10 ? "0" + minutes : minutes.toString();
  var secondsString =
    remainingSeconds < 10
      ? "0" + remainingSeconds
      : remainingSeconds.toString();

  return minutesString + ":" + secondsString;
};
