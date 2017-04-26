'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    let sum = arr.reduce(function(acc, val){
      return acc + val;
    },base);
    return sum;
  },

  someObjsContainProp: (arr, prop) => {
    let contains = arr.some(function(i) {
      return (i.hasOwnProperty(prop));
    });

    return contains;
  },

  convertNameArrayToObject: (arr) => {

    let nameObj = arr.map(function(i){
      return {'first':i[0], 'last':i[1]}
    })
    return nameObj;
  },

  objContainsProp: (arr, prop) => {
    var newArr = arr.every(function(i){
      return (i.hasOwnProperty(prop));
    });
    return newArr;
  },

  stringMatch: (arr, str) => {
    var newArr = arr.filter(function(word) {
      return word.includes(str);
    });
  return newArr;
  },

};
