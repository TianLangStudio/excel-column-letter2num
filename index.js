'use strict';
exports.excelCol2Num = function (colName) {
      return  colName.toUpperCase().split('').reverse().reduce(function(start, ltr, idx){
                return start + Math.pow(26, idx) * (parseInt(ltr, 36) - 9);
              }, 0);
};
