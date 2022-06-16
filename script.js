var Game={};
Game.count = 0
Game.cps = 0
Game.prs = 10000
Game.prsL = 0
Game.prsW = 128
function c() {
  Game.count += 1
  draw()
}
function buy(cps,cost) {
  if (cost <= Game.count) {
  Game.cps += cps
  Game.count -= cost
  draw()
  }
}

function draw() {
  document.getElementById("cps").innerHTML = Game.cps;
  document.getElementById("count").innerHTML = Game.count;
  document.getElementById("prs").width = (Game.count/Game.prs)*Game.prsW;
  //console.log((Game.count/Game.prs)*Game.prsW)
  
}



function start() {
  setInterval(tick, 1000)
}

function tick() {
  Game.count += Game.cps
  if (Game.count >=Game.prs) {
    Game.count -= Game.prs
    
  }
  draw()
}