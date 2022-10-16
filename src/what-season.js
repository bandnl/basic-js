const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

 function getSeason(date) {
  if (date) {
    if (typeof date.getDate() !== 'number' || typeof date.getMonth() !== 'number' || typeof date.getFullYear() !== 'number') {
      return Error("Invalid date!")
    } else {
      let day = date.getDate(); 
      let month = date.getMonth();
      let year = date.getFullYear(); 
      let season = '';
      (function () {
        switch (month) {
          case 0:
          case 1:
          case 11:
            season = 'winter';
            break;

          case 2:
          case 3:
          case 4:
            season = 'spring';
            break;

          case 5:
          case 6:
          case 7: 
            season = 'summer';
            break;

          case 8: 
          case 9: 
          case 10:
            season = 'autumn';
            break;
        }
      }(month));
      return season;
    }
  } else {
    let string = 'Unable to determine the time of year!';
    return string;
  }
}



/* function getSeason(date) {
  function Date (year, month, day) {
    this.day = day; 
    this.month = month;
    this.year = year;
    this.display = function () {
      let season = '';
      switch (this.month) {
        case 1:
        case 2:
        case 12:
          season = 'winter';
          break;

        case 3:
        case 4:
        case 5:
          season = 'spring';
          break;
        
        case 6:
        case 7:
        case 8: 
          season = 'summer';
          break;

        case 9: 
        case 10: 
        case 11:
          season = 'autumn';
          break;
      }
      return season;
    }
      return this.display();
  }
} */

module.exports = {
  getSeason
};
