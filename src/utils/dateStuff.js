var dateFormat = require('dateformat');

export const displayStopwatch = (sec) => {
  let output = `Planning time: `;
  let hours = Math.floor(sec/3600);
  let minutes = Math.floor(sec/60);
  let secondsString = '';
  if (minutes > 0) {
    if (hours > 0) {
      let hoursString = ("00" + hours).slice(-2);
      output += hoursString + ":";
    }
    let minutesString = '';
    if (minutes > 9) {
      minutesString = ("00" + (minutes%60)).slice(-2);
    } else {
      minutesString = minutes.toString();
    }
    output += minutesString + ":";
    secondsString = ("00" + (sec%60)).slice(-2);
  } else {
    secondsString = (sec%60).toString();
  }
  output += secondsString + "."
  return output;
}

export const displayDate = (d) => {
  return dateFormat(d, "ddd, dS mmm yyyy, h:MM TT");
}

export const titleDate = d => {
  return dateFormat(d, "dS mmm yy");
}
