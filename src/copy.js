(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['microclip'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.microclip = factory();
  }
}(this, function () {
  function copy(text) {
    var doc = document,
        body = doc.body,
        input = doc.createElement('input');

    input.style.position = 'absolute';
    input.style.top = '-100px';
    input.value = text;

    body.appendChild(input);
    input.select();
    doc.execCommand('cut');
    body.removeChild(input);
  }

  return {
    copy: copy,
  };
}));
