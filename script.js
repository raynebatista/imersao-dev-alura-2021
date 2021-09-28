document.querySelector("body").addEventListener("mousemove", pupila);

function pupila() {
  "use strict";
  var olho = document.querySelectorAll(".olho");
  olho.forEach(function (olho) {
    let x = olho.getBoundingClientRect().left + olho.clientWidth / 2;
    let y = olho.getBoundingClientRect().top + olho.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = radian * (180 / Math.PI) * -1 + 270;
    olho.style.transform = "rotate(" + rot + "deg)";
  });
}