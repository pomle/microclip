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
  input.blur();
  body.removeChild(input);
}

module.exports = {
  copy,
}
