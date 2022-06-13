var Game={};
Game.count = 0
Game.cps = 0
function c() {
  Game.count += 1
  document.getElementById("count").innerHTML = Game.count;
}





function start() {
  setInterval(tick, 1000)
}

function tick() {
  Game.count += Game.cps
  document.getElementById("count").innerHTML = Game.count;
}