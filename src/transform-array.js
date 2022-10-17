const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (arr instanceof Array) {
    let resArr = [];
    for (let key=0; key<arr.length; key++) {
      if (typeof arr[key] === 'number') {
        if (isNaN(arr[key])) {
          key++;
        } else {
        resArr.push (+arr[key]);
        }
      } else {
        if (typeof arr[key] === 'string') {
          let curVal = arr[key];
          switch (arr[key]) {
            case '--double-next':
              if (arr[key + 1]) {
                curVal = arr.slice (arr[key + 1], arr[key + 2]);
                resArr.push (+curVal);
              }
              break;
            
            case '--double-prev':
              if (arr.indexOf(arr[key]) != 0 ) { 
                curVal = arr.slice (arr[key - 2], arr[key - 1]);
                resArr.push (+curVal);
              }
              break;
            
            case '--discard-prev':
              if (arr.indexOf(arr[key]) != 0 ) {
                resArr.pop ();
              }
              break;

            case '--discard-next':
              if (arr[key + 1]) {
                key++;
              }
              break;
            }
          } else continue;
        }
    }
    return resArr;
  } else throw new Error("'arr' parameter must be an instance of the Array!")
}

module.exports = {
  transform
};
