'use strict';
exports.excelCol2Num = function (colName) {
  var letters = Array.from(colName.toUpperCase()),
        len = letters.length;
              return letters.reduce(function(start, ltr, idx){
                return start + Math.pow(26, len - 1 - idx) * (parseInt(ltr, 36) - 9);
              }, 0);
};
