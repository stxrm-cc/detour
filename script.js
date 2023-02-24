var textElement = document.querySelector(".content");

var platforms = ["BGX", "LeagueSense"];
var frameIndex = 0;
var drawIndex = 0;

var client_date = new Date().toLocaleTimeString();
var time = (date) => {
    let parsed1 = parseInt(date.slice(0,1)), parsed2 = parseInt(date.slice(0,2)) ;
    if (parsed1 == parsed2) {
        return parsed1;
    } else if (parsed1 < parsed2){
        return parsed2;
    }
};

function time_of_day(client, date) {
  // Function that checks if it's morning/afternoon/evening/night for the webpage visitor and returns that value
  client_ = client.slice(-2);
  
  // 5 <= date <= 11 doesn't work in JS (as it is supposed to, at least)
  if (client_ == "AM" && (date >= 5 && date <= 11)){
      return "morning";
  } else if (client_ == "PM" && ((date >= 1 && date < 5) || date == 12)) {
      return "afternoon";
  } else if (client_ == "PM" && (date >= 5 && date < 9)) {
      return "evening";
  }
  return "night";
};

var textContent = (`∞ Detour Services ∞\n\n\nWelcome to the Detour Bypass Official Gateway.\n\n\nWe are here to provide you with services to patch Riot Packman AntiCheat checks for your cheap, public platforms of choice.........\n\n\nThis is the only official website of Detour.\n\n\nThe current supported platforms are: ${platforms[0]}, ${platforms[1]}.........\n\n\nFor further communication needs you may contact me using my discord handle which is the following: sauce#9109.........\n\n\nHave a pleasant rest of your ${time_of_day(client_date, time(client_date)}......... \n\n\n\n\n\n\n\n\n\n\nsudo rm -rf logs.txt && sudo reboot  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`).split("");


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
