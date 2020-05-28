const CENTER = window.innerWidth / 2;
const REFRESH_RATE = 40;
const EARTH_YEAR_DAYS = 365;
const EARTH_PERIOD = 30000;

let isFreezed = false;

function orbits(planetID, orbitRadius, yearDays) {
  const SPEED = orbitRadius * 2 / (EARTH_PERIOD / REFRESH_RATE * yearDays / EARTH_YEAR_DAYS);
  let planet  = document.getElementById(planetID);
  let pos = CENTER;
  let velocity = SPEED;  // 1 for right, or -1 for left
  function frame() {
    if (isFreezed) {
      return;
    }
  
    if (pos >= CENTER) {
      if (pos >= CENTER + orbitRadius) {
        velocity = -SPEED;
        planet.zIndex = "-1";
      }
      pos += velocity;
      planet.style.left = pos + "px";
    } else if (pos < CENTER) {
      if (pos <= CENTER - orbitRadius) {
        velocity = SPEED;
        planet.zIndex = "1";
      }
      pos += velocity;
      planet.style.left = pos + "px";
    }
  }
  setInterval(frame, REFRESH_RATE);
}

function playWithTime() {
  isFreezed = !isFreezed;
}

function solarSystemOrbits() {
  orbits("mercury", 4324.32, 88);
  orbits("venus", 8076.64, 224.7);
  orbits("earth", 11171.68, EARTH_YEAR_DAYS);
  orbits("mars", 17025.84, 686.97);
  orbits("jupiter", 58124.56, 4332.59);
  orbits("saturn", 107048.24, 10759.22);
  orbits("uranus", 214498.96, 30688.5);
  orbits("neptune", 335922.08, 60182);
}