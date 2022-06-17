var lang = "";
var Game={};
Game.count = 0
Game.cps = 0
Game.prs = 10000
Game.prsL = 0
Game.prsW = 128

Game.itms = {}
Game.itms.saw = {}
Game.itms.saw.price = 2
Game.itms.saw.cps = 1
Game.itms.lumberjack = {}
Game.itms.lumberjack.price = 50
Game.itms.lumberjack.cps = 5
Game.itms.coupon = {}
Game.itms.coupon.price = 5
Game.itms.coupon.buy = function () {
  Game.flags.coupon = true
}


Game.flags = {}
Game.flags.coupon = false

Game.local = {}
Game.local.upgrades = {}
Game.local.upgrades.saw = "saw"
Game.local.upgrades.lumberjack = "lumberjack"
Game.local.log = "<img src=\"Log.png\" height=\"16\" width=\"16\">"


function c() {
  Game.count += 1
  draw()
}
function buy(itm) {
  if (Game.itms[itm].price <= Game.count) {
  Game.cps += Game.itms[itm].cps
  Game.count -= Game.itms[itm].price
  if (Game.flags.coupon) {
  Game.itms[itm].price += Math.floor((Game.itms[itm].price/4))
  }
  else{
    Game.itms[itm].price += Math.floor((Game.itms[itm].price/2))
  }
  draw()
  }
}

function draw() {
  document.getElementById("cps").innerHTML = Game.cps;
  document.getElementById("count").innerHTML = Game.count;
  document.getElementById("gems").innerHTML = Game.prsL;
  document.getElementById("prs").width = (Game.count/Game.prs)*Game.prsW;
  //console.log((Game.count/Game.prs)*Game.prsW)
  refrShop()
}



function start() {
  setInterval(tick, 1000)
}

function tick() {
  Game.count += Game.cps
  if (Game.count >=Game.prs) {
    Game.count -= Game.prs
    Game.prsL += 1 
    
  }
  draw()
}

function refrShop() {
  document.getElementById("saw").innerHTML = Game.local.upgrades.saw + " - " + Game.itms.saw.price +Game.local.log;
  document.getElementById("lumberjack").innerHTML = Game.local.upgrades.lumberjack + " - " + Game.itms.lumberjack.price +Game.local.log;
}

function pointsBuy(itm) {
  if (Game.itms[itm].price <= Game.prsL) {
    Game.itms[itm].buy()
    Game.prsL -= Game.itms[itm].price
    Game.itms[itm].price += Math.floor((Game.itms[itm].price/2))
    draw()
    }
}