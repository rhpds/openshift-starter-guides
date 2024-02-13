function addPasteFunctionality () {
  var copybuttons = document.getElementsByClassName("copy-button")
  function paste(el) {
    console.log(el.target)
    window.parent.document.getElementById('terminal_01').contentWindow.document.execCommand('insertText', false, el.target.nextSibling.innerText);
  }
  Array.prototype.forEach.call(copybuttons, function (b) { console.log(b); b.addEventListener('click', paste); });
}
window.onload = addPasteFunctionality
