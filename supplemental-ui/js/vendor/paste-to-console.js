var copybuttons = document.getElementsByClassName("copy-button")
function paste() {
  window.parent.document.getElementById('terminal_01').contentWindow.document.execCommand('insertText', false, 'ls');
}
Array.prototype.forEach.call(copybuttons, function (b) { console.log(b); b.addEventListener('click', paste); });
