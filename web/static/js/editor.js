// Generated by LiveScript 1.3.1
var handler, span;
handler = function(e){
  return console.log("[sandbox] incoming message: ", e);
};
window.addEventListener('message', handler, false);
console.log("sandbox JS load OK.");
span = document.querySelector("span");
span.innerText = "sandbox JS load OK.";