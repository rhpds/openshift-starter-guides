var copybuttons = document.getElementsByClassName("copy-button")
Array.prototype.forEach.call(copybuttons, function (b) {
  addEventListener('click', 
   window.parent.document.getElementById('terminal_01').contentWindow.document.execCommand('insertText', false, 'ls'))
});
