// ==UserScript==
// @name         datadog widescreen notebooks
// @namespace    https://ashleyiris.com/
// @version      0.1
// @description  DD UI fixes
// @author       Ashley Iris
// @match        https://app.datadoghq.com/notebook/*
// @icon         https://www.google.com/s2/favicons?domain=datadoghq.com
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

(function() {
    'use strict';
    addGlobalStyle(`
.NotebookEditor .LiveEditor .NotebookBuffer-container .content { max-width: unset ! important; }
.Notebook__CellWidthContainer { max-width: unset ! important; }
.druids_typography_text.druids_typography_text--xxs.druids_typography_text--default.druids_typography_text--normal.druids_typography_text--left.druids_typography_text--not-editorial-copy.druids_table_table.druids_table_table--size-xxs.druids_table_table--is-borderless.druids_table_table--is-scrollable.druids_table_table--is-y-scrollable.druids_table_table--has-fixed-row-height {
    height: unset !important;
}
`);

})();

