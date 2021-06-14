let s = function (p) {
  let fira;
  p.preload = function () {
    fira = p.loadFont('assets/FiraCode-Retina.ttf');

  }
  p.setup = function () {
    let mobile = 400;
    if (p.windowWidth < mobile) {
      canvas = p.createCanvas(p.windowWidth, p.windowHeight / 3, p.WEBGL);
    } else {
      canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    }
    canvas.position(0, 0,)
    p.textFont(fira);
    p.frameRate(60)

  }
  p.draw = function () {
    p.background(22)
    p.textSize(p.windowWidth / 17)
    gap = p.windowWidth / 22
    p.push()
    p.translate(-p.width / 10, 0)
    time = p.millis()
    if (p.mouseIsPressed) {
      let a = p.atan2(p.mouseY - p.height / 2, p.mouseX - p.width / 2)
      p.rotateX(a);
      p.rotateY(a);
      p.stroke(0, 200, 200)
    } else {
      p.rotateX(time * 0.0005)
      p.rotateY(time * 0.0005)
      p.stroke(255)
    }
    p.fill(0, 160, 255, 0)
    p.sphere((p.windowWidth / 6), 3, 3)

    p.pop()

    p.text('Zane', 0, -gap)
    p.text('Schaffer', 0, gap)

  }

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

}
let header = new p5(s, 'container');


