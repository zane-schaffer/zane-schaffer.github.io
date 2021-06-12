let s = function (p) {
  let fira;
  p.preload = function () {
    fira = p.loadFont('assets/FiraCode-Retina.ttf');

  }
  p.setup = function () {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
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
    p.rotateX(time * 0.0005)
    p.rotateY(time * 0.0005)

    p.fill(0, 160, 255, 0)
    p.stroke(255)

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


let k = (p) => {
  let fira;
  p.preload = function () {
    fira = p.loadFont('assets/FiraCode-Retina.ttf');

  }
  p.setup = () => {
    var canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.position(0, 0, 'relative');
    p.textFont(fira);


  }


  p.draw = () => {
    var centerW = p.width / 2;
    var centerH = p.height / 2;
    p.textAlign(p.CENTER)
    p.background(22);
    p.textSize(p.windowWidth / 23)
    p.fill(255);


  }
}
let links = new p5(k, 'links')