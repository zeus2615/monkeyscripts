// ==UserScript==
// @name         77已读
// @namespace    http://77bike.com/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant   GM_getValue
// @grant   GM_setValue
// @include        http*://*77bike.com/
// ==/UserScript==

var f14 = document.getElementsByClassName('subject_t f14');

if (f14.length > 0) {
  for (var i in f14) {
      var item = f14[i];
      if (typeof item != 'object') {
          continue;
      }
      if (!GM_getValue(item.id)) {
          item.style.color='red';
      }
  //  console.log(typeof item);
  //  console.log(item);
      item.addEventListener('click', function(event) {
          GM_setValue(this.id, true)
      });
  }
}
