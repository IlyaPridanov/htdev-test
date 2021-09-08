/* eslint-disable max-nested-callbacks */
'use strict';

(function () {
  window.onload = function () {
    var jsCatalogRow1 = document.querySelectorAll('.js-catalog-row1');
    var jsCatalogRow2 = document.querySelectorAll('.js-catalog-row2');

    var getRowHeight = function (rowExport, rowImport) {
      rowExport.forEach(function (item, i) {
        item.style.height = rowImport[i].offsetHeight + 'px';
      });
    };

    getRowHeight(jsCatalogRow1, jsCatalogRow2);
  };
})();
