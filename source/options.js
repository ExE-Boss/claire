function run() {
  'use strict';
  var debugLogCheckbox = document.getElementById('debug_log_checkbox');

  // check current debug state flag and change the checkbox accordingly
  debugLogCheckbox.checked = localStorage.debug_logging === 'yes';

  // attach a click event to the debug log preference checkbox
  var debugCheckboxClicked = function (e) {
    localStorage.debug_logging = e.target.checked ? 'yes' : 'no'; // eslint-disable-line camelcase
  };
  debugLogCheckbox.onclick = debugCheckboxClicked;

  var claireGuideCheckbox = document.getElementById('claire_guide');

  claireGuideCheckbox.checked = localStorage.hide_guide === 'yes';

  var claireGuideClicked = function (e) {
    localStorage.hide_guide = e.target.checked ? 'yes' : 'no'; // eslint-disable-line camelcase
  };

  claireGuideCheckbox.onclick = claireGuideClicked;
}

module.exports.run = run;

if (require.main === module) {
  var style; // eslint-disable-line no-unused-vars
  style = require('purecss/build/pure-min.css');
  style = require('purecss/build/grids-responsive-min.css');
  style = require('./style.css');

  run();
}
