"use strict";

$(function () {
  console.log('Hello Bootstrap5');
}); // CK Editor

ClassicEditor.create(document.querySelector('#editor')).then(function (editor) {
  console.log(editor);
})["catch"](function (error) {
  console.error(error);
}); // CK Editor Toggle

$(document).ready(function () {
  $('#reply_btn').click(function () {
    $('.editorWrap').toggleClass('active');
  });
});
//# sourceMappingURL=all.js.map
