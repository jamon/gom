// Create a script element that points to injected.js
const script = document.createElement('script');
script.src = chrome.runtime.getURL("injected.js");
script.onload = function() {
  // Optionally remove the script element after it's loaded
  this.remove();
};
(document.head || document.documentElement).appendChild(script);
