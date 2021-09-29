var bg
var coinimg
var diamondimg
var cointype
var coin
var score = 0
var level = 1
var time = 1050
var score2 = 30

function preload() {
  bg = loadImage("bg.jpeg")
  coinimg = loadImage("coin.png")
  diamondimg = loadImage("dimond.png")
}

function setup() {
  createCanvas(1000, 700);
  coin = createSprite(random(100, 900), random(100, 600), 40, 40)
  coin.addImage(coinimg)
  coin.scale = 0.2
}

function draw() {
  background(bg);
  textSize(25)
  text("score = " + score, 40, 40)
  text("level = " + level, 200, 40)

  if (mousePressedOver(coin)) {
    if (cointype === coinimg) {
      score = score + 1
    } else {
      score = score + 5
    }

    console.log(score)
    coin.remove()
    coin = null
    addCoins()
  }
  if (level <= 10)
    if (score >= score2) {
      level = level + 1
      leveladd()
      console.log(level)
      time = time - 100
      score2 = score2 + 30
    }

  drawSprites();
}

function leveladd() {
  fill("#E7D861")
  text("level up!!", 500, 350)
  textSize(100)
}

function addCoins() {
  if (random(0, 100) > 85) {
    cointype = diamondimg
  } else {
    cointype = coinimg
  }
  coin = createSprite(random(100, 900), random(100, 600), 40, 40)
  coin.addImage(cointype)
  coin.scale = 0.2
  coin.lifetime = time
}