let s = function (p) {
  let fira;
  p.preload = function () {
    fira = p.loadFont('assets/FiraCode-Retina.ttf');

  }

  p.setup = function () {
    var canvasDiv = document.getElementById('canvasContainer');
    var width = canvasDiv.offsetWidth;
    var height = canvasDiv.offsetHeight;
    canvas = p.createCanvas(width, height, p.WEBGL);
    canvas.position(0, 0, "relative")
    p.textFont(fira);
    p.frameRate(60)

  }
  p.draw = function () {
    p.background('#2E3440')
    p.textSize(p.windowWidth / 17)
    gap = p.windowWidth / 22
    p.push()
    p.translate(-p.width / 10, 0)
    time = p.millis()

    p.rotateX(time * 0.0005)
    p.rotateY(time * 0.0005)
    p.stroke(255)

    p.fill(0, 160, 255, 0)
    p.sphere((p.windowWidth / 6), 3, 3)

    p.pop()

    p.fill('#D8DEE9')

    p.text('Zane', 0, -gap)
    p.text('Schaffer', 0, gap)

  }

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

}
let header = new p5(s, 'canvasContainer');


