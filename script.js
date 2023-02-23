var textElement = document.querySelector(".content");

var client_date = new Date().toLocaleTimeString();
function time_of_day(date) {
  // Function that checks if it's morning/afternoon/evening/night for the webpage visitor and returns that value
  if (date.slice(-2) == "A" && 11 >= parseInt(date.slice(0,2)) >= 5){
      return "morning";
  } else if (date.slice(-2) == "P" && 5 >= parseInt(date.slice(0,2)) >= 12) {
      return "afternoon";
  } else if (date.slice(-2) == "P" && 9 >= parseInt(date.slice(0,2)) > 5) {
      return "evening";
  } else {
      return "night";
  }
};

var platforms = ["BGX", "LeagueSense"];
var textContent = (`∞ Detour Services ∞\n\n\nWelcome to the Detour Bypass Official Gateway.\n\n\nWe are here to provide you with services to patch Riot Packman AntiCheat checks for your cheap, public platforms of choice.........\n\n\nThis is the only official website of Detour.\n\n\nThe current supported platforms are: ${platforms[0]}, ${platforms[1]}.........\n\n\nFor further communication needs you may contact me using my discord handle which is the following: sauce#9109.........\n\n\nHave a pleasant rest of your ${time_of_day(client_date)}......... \n\n\n\n\n\n\n\n\n\n\nsudo rm -rf logs.txt && sudo reboot  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`).split("");
var frameIndex = 0;
var drawIndex = 0;

function draw(time) {
  window.requestAnimationFrame(draw);
  if(frameIndex % Math.floor(Math.random()*4+4) === 0) {
    textElement.innerHTML = textElement.innerHTML + textContent[drawIndex % textContent.length];
    if(textElement.innerHTML.length > 60) {
      textElement.innerHTML = textElement.innerHTML.substr(textElement.innerHTML.indexOf("\n") + 1)
    }
    drawIndex++;
  }
  frameIndex += 1;
}

draw();
