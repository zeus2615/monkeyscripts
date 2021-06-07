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

(function() {
    'use strict';
    
    // Your code here...
})();


var f14 = document.getElementsByClassName('subject_t f14');
if (f14.length > 0) {
  for (var i in f14) {

      var item = f14[i];
      if (typeof item != 'object') {
          continue;
      }

      var value = GM_getValue(item.id);
      if (!value) {
        //全部已读标红色
          item.style.color='red';
      }
      var replyCount = item.parentElement.nextElementSibling.nextElementSibling.childNodes[0].textContent;

      if (value !== undefined && value < replyCount){
        //部分已读标棕色
          item.style.color='brown';
      }
      console.log(item.id);
      console.log(value);
      console.log(replyCount);
      item.addEventListener('click', function(event) {
          var thisReply =this.parentElement.nextElementSibling.nextElementSibling.childNodes[0].textContent;
          console.log(thisReply);
          GM_setValue(this.id, thisReply);
      });
  }

}
