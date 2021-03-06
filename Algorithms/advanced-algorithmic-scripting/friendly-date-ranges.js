/*
Friendly Date Ranges
Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal ("1st" instead of "1").

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year. If the range ends in the same month that it begins, do not display the ending year or month.

Additionally, if the date range begins in the current year and ends within one year, the year should not be displayed at the beginning of the friendly range.

Examples:

friendly(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

friendly(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.split()
String.substr()
parseInt()


friendly(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"].
friendly(["2016-12-01", "2017-02-03"]) should return ["December 1st","February 3rd"].
friendly(["2016-12-01", "2018-02-03"]) should return ["December 1st, 2016","February 3rd, 2018"]. fix 
friendly(["2017-03-01", "2017-05-05"]) should return ["March 1st, 2017","May 5th"]
friendly(["2018-01-13", "2018-01-13"]) should return ["January 13th, 2018"]. fix 
friendly(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th"]. fix
friendly(["2022-09-05", "2023-09-05"]) should return ["September 5th, 2022","September 5th, 2023"].
*/


var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function makeFriendlyDates(arr) {
  var date1 = arr[0].split('-');
  var date2 = arr[1].split('-');
  var date1Day = date1[2];
  var date2Day = date2[2];
  var date1Year = date1[0];
  var date2Year = date2[0];
  var date1Month = date1[1];
  var date2Month = date2[1];
  // console.log(date1);
  //console.log(date1Day);
  // console.log(date1Year);
  // console.log(date1Month);
  var retArr = [];

  function getMonth(month) {
    //console.log(months[month-1]);
    return months[month - 1];

  }

  function compareYears() {
    milliPerYear = +(86400000 * 365).toFixed(1);
    //console.log(milliPerYear);
    var d = new Date(date1).getTime();
    var e = new Date(date2).getTime();
    diff = +(e - d);
    //console.log(diff);

  }

  function dayEnding(day) {

    //console.log(day.charAt(0));
    if (day.charAt(0) == 0) {

      day = day.replace(day.charAt(0), '');
      day.split('');
      day = +day;
    }
    //console.log(day);
    switch (day) {
      case 1:
      case 21:
      case 31:
        return day + "st";

      case 2:
      case 22:
        return day + "nd";

      case 3:
      case 23:
        return day + "rd";

      default:
        return day + "th";

    }

  }
  compareYears();

  // if over a year
  if (diff >= milliPerYear) {
    console.log("over a year");
    console.log(diff - milliPerYear);
	retArr.push(getMonth(date1Month) + ' ' + dayEnding(date1Day) + ', ' + date1Year);
	
	retArr.push(getMonth(date2Month) + ' ' + dayEnding(date2Day) + ', ' + date2Year);
   
    console.log(retArr);
    return retArr;

  }
  // if different months and under a year
  else if (date1Month !== date2Month && diff < milliPerYear && date1Year === date2Year) {
    retArr.push(getMonth(date1Month) + ' ' + dayEnding(date1Day) + ', ' + date1Year);
	retArr.push(getMonth(date2Month) + ' ' + dayEnding(date2Day));
    console.log(retArr);
    return retArr;
  }
  // if different months and under a year and diff year
  else if (date1Month !== date2Month && diff < milliPerYear && date1Year != date2Year) {
    retArr.push(getMonth(date1Month) + ' ' + dayEnding(date1Day)); 
	retArr.push(getMonth(date2Month) + ' ' + dayEnding(date2Day));
    console.log(retArr);
    return retArr;
  }
  // same month under a year but different year;
  else if (date1Month === date2Month && diff < milliPerYear && date1Year !== date2Year && date1Day !== date2Day) {
    retArr.push(getMonth(date1Month) + ' ' + dayEnding(date1Day) + ', ' + date1Year);
	retArr.push(getMonth(date2Month) + ' ' + dayEnding(date2Day));
    console.log(retArr);
    return retArr;

  }
  //same month same year different day
  else if (date1Month === date2Month && diff < milliPerYear && date1Year === date2Year && date1Day !== date2Day) {
    retArr.push(getMonth(date1Month) + ' ' + dayEnding(date1Day));
	retArr.push(dayEnding(date2Day));
    console.log(retArr);
    return retArr;

  }
  //same month same day 
  else if (date1Month === date2Month && date1Day === date2Day) {
    retArr.push(getMonth(date1Month) + ' ' + dayEnding(date1Day) + ', ' + date1Year);

    console.log(retArr);
    return retArr;

  }

}
makeFriendlyDates(["2016-07-01", "2016-07-04"]);// should return ["July 1st","4th"]. 
makeFriendlyDates(["2016-12-01", "2017-02-03"]);// should return ["December 1st","February 3rd"]. 
makeFriendlyDates(["2016-12-01", "2018-02-03"]);// should return ["December 1st, 2016","February 3rd, 2018"].
makeFriendlyDates(["2017-03-01", "2017-05-05"]);// should return ["March 1st, 2017","May 5th"]
makeFriendlyDates(["2018-01-13", "2018-01-13"]);// should return ["January 13th, 2018"]. 
makeFriendlyDates(["2022-09-05", "2023-09-04"]);// should return ["September 5th, 2022","September 4th"]. 
makeFriendlyDates(["2022-09-05", "2023-09-05"]) ;//should return ["September 5th, 2022","September 5th, 2023"].

 /*current date and time-------------------------------
var d = new Date("2015-03-25");

var d= new Date();                      */
/*

Problem Explanation:

Create a program that will take two dates and convert them into a more easy to understand date such as January 1st, 2017. It will also check the difference between them, and handles cases with no difference, more than a day, more than a month, more than a year, and more than a month and less than a year respectively.
Hint: 1

Split the string into an array where you get the "YYYY", "MM", "DD"
Hint: 2

You need to handle the case for "st", "nd", and "th". Note that 13 is "th" not "rd".
Hint: 3

If you are using Date() to create instances of dates to work with, then use UTC time to avoid errors due to time zone difference between servers.

function friendly(str) {

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // COnverst a YYYY-MM-DD string into a date object.
  function convertDate(str) {
    // Split the dates to work independently.
    var dateStr = str.split('-');

    // Force the dates into Universal time to avoid issues due to timezones.
    return (new Date(Date.UTC(dateStr[0], dateStr[1] - 1, dateStr[2])));

  }

  // Handles the case of the day's endings.
  function dateEnding(val) {
    switch (val) {
      case 1:
      case 21:
      case 31:
        return val + 'st';
      case 2:
      case 22:
        return val + 'nd';
      case 3:
      case 23:
        return val + 'rd';
      default:
        return val + 'th';
    }
  }

  // Checks for the real difference in months to avoid errors
  function monthDiff(date1, date2) {
    var month2 = date2.getUTCFullYear() * 12 + date2.getUTCMonth();
    var month1 = date1.getUTCFullYear() * 12 + date1.getUTCMonth();
    return month2 - month1;
  }

  // Get's the right month string.
  function getMonth(date) {
    return months[date.getUTCMonth()];
  }

  function displayDate() {

    // Handles same day
    if (date2.getTime() - date1.getTime() === 0) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()) + ', ' + date1.getUTCFullYear()];
    }

    // Handles same month
    if (date1.getUTCMonth() === date2.getUTCMonth() && date1.getUTCFullYear() === date2.getUTCFullYear()) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()), dateEnding(date2.getUTCDate())];
    }

    // Handles more than a month of difference, but less than 12 months
    if (monthDiff(date1, date2) < 12) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate())];
    }

    // Handles cases with more than 12 months apaprt.
    return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()) + ', ' + date1.getUTCFullYear(), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate()) + ', ' + date2.getUTCFullYear()];
  }

  var date1 = convertDate(str[0]);
  var date2 = convertDate(str[1]);

  return displayDate();
  
 // parse a date in yyyy-mm-dd format
function parseDate(input) {
  var parts = input.match(/(\d+)/g);
  // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
  return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
}
 
  
  */
  
  