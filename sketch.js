let txt1, txt2, txt3, txt4, txt5, txt6, txt7, txt8;
let d1, d2, d3, d4, d5, d6, d7, d8, d11, d22, d33, d44;

let font;
let ax = 250;
let h = 150;

let t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  t7,
  t8 = 0;
let label = "공든탑이무너지랴 ";
let g = 100;
let g0 = 80;
let g1 = 130;
let g2 = 150;
let n = 400;

function setup() {
  frameRate(12);
  canvas = createCanvas(500, 500);
  canvas.position(windowWidth / 2 - 500 / 2, windowHeight / 2 - 500 / 2);
  font = loadFont("BMHANNAProOTF.otf");

  d1 = new Doll("공", ax, n - 5);
  d2 = new Doll("든", ax - 30, n - 5);
  d3 = new Doll("탑", ax + 30, n - 5);
  d4 = new Doll("이", int(random(g, g2)), int(random(n - g / 10, n + g / 10)));
  d5 = new Doll(
    "무",
    int(random(ax - g, ax + g)),
    int(random(n - g / 10, n + g / 10))
  );
  d6 = new Doll(
    "너",
    int(random(ax - 100, ax + 100)),
    int(random(n - g / 10, n + g / 10))
  );
  d7 = new Doll(
    "지",
    int(random(ax - g1, ax + g1)),
    int(random(n - g / 10, n + g / 10))
  );
  d8 = new Doll(
    "랴",
    int(random(ax - g2, ax + g2)),
    int(random(n - g / 10, n + g / 10))
  );
  d11 = new Doll(
    "공",
    int(random(ax - g, ax + g)),
    int(random(n - g / 20, n + g / 20))
  );
  d22 = new Doll(
    "든",
    int(random(ax - g1, ax + g1)),
    int(random(n - g / 20, n + g / 20))
  );

  textFont(font);
  ax = width / 2;
  h = height / 2 - 90;
}

function draw() {
  background("#CFE6F7");
  noStroke();
  fill("#B7B7B7");
  rect(0, n, width, n);

  fill(255, 255, 255);
  ellipse(80, 60, 50, 40);
  ellipse(120, 60, 70, 50);
  ellipse(160, 60, 50, 40);

  fill(255, 255, 255);
  ellipse(80 + 260, 80, 45, 35);
  ellipse(120 + 260, 80, 65, 45);
  ellipse(160 + 260, 80, 45, 35);

  fill("#5D5D5D");
  d1.drawn();
  d2.drawn();
  d3.drawn();
  d4.drawn();
  d5.drawn();
  d6.drawn();
  d7.drawn();
  d8.drawn();
  d11.drawn();
  d22.drawn();

  if (t1 === 0) {
    txt1 = new Typo("공", ax, h, 20);
    txt1.update();
  } else if (t1 === 1) {
    txt1 = new Typo("공", ax - 5, h, 20);
    txt1.update();
    t1 = t1 + 1;
  } else if (t1 === 2) {
    txt1 = new Typo("공", ax, h, 20);
    txt1.update();
    t1 = t1 + 1;
  } else if (t1 === 3) {
    txt1 = new Typo("공", ax - 5, h, 20);
    txt1.update();
    t1 = t1 + 1;
  } else if (t1 === 4) {
    txt1 = new Typo("공", ax, h, 20);
    txt1.update();
    t1 = 0;
  }

  if (t2 === 0) {
    txt2 = new Typo("든", ax, h + 20, 24);
    txt2.update();
  } else if (t2 === 1) {
    txt2 = new Typo("든", ax + 6, h + 20, 24);
    txt2.update();
    t2 = t2 + 1;
  } else if (t2 === 2) {
    txt2 = new Typo("든", ax, h + 20, 24);
    txt2.update();
    t2 = t2 + 1;
  } else if (t2 === 3) {
    txt2 = new Typo("든", ax - 6, h + 20, 24);
    txt2.update();
    t2 = t2 + 1;
  } else if (t2 === 4) {
    txt2 = new Typo("든", ax, h + 20, 24);
    txt2.update();
    t2 = 0;
  }

  if (t3 === 0) {
    txt3 = new Typo("탑", ax, h + 44, 29);
    txt3.update();
  } else if (t3 === 1) {
    txt3 = new Typo("탑", ax + 4, h + 44, 29);
    txt3.update();
    t3 = t3 + 1;
  } else if (t3 === 2) {
    txt3 = new Typo("탑", ax, h + 44, 29);
    txt3.update();
    t3 = t3 + 1;
  } else if (t3 === 3) {
    txt3 = new Typo("탑", ax + 4, h + 44, 29);
    txt3.update();
    t3 = t3 + 1;
  } else if (t3 === 4) {
    txt3 = new Typo("탑", ax, h + 44, 29);
    txt3.update();
    t3 = 0;
  }

  if (t4 === 0) {
    txt4 = new Typo("이", ax, h + 73, 40);
    txt4.update();
  } else if (t4 === 1) {
    txt4 = new Typo("이", ax + 8, h + 73, 40);
    txt4.update();
    t4 = t4 + 1;
  } else if (t4 === 2) {
    txt4 = new Typo("이", ax, h + 73, 40);
    txt4.update();
    t4 = t4 + 1;
  } else if (t4 === 3) {
    txt4 = new Typo("이", ax - 6, h + 73, 40);
    txt4.update();
    t4 = t4 + 1;
  } else if (t4 === 4) {
    txt4 = new Typo("이", ax, h + 73, 40);
    txt4.update();
    t4 = 0;
  }

  if (t5 === 0) {
    txt5 = new Typo("무", ax, h + 102, 35);
    txt5.update();
  } else if (t5 === 1) {
    txt5 = new Typo("무", ax - 6, h + 102, 35);
    txt5.update();
    t5 = t5 + 1;
  } else if (t5 === 2) {
    txt5 = new Typo("무", ax, h + 102, 35);
    txt5.update();
    t5 = t5 + 1;
  } else if (t5 === 3) {
    txt5 = new Typo("무", ax + 6, h + 102, 35);
    txt5.update();
    t5 = t5 + 1;
  } else if (t5 === 4) {
    txt5 = new Typo("무", ax, h + 102, 35);
    txt5.update();
    t5 = 0;
  }

  if (t6 === 0) {
    txt6 = new Typo("너", ax, h + 132, 55);
    txt6.update();
  } else if (t6 === 1) {
    txt6 = new Typo("너", ax + 6, h + 132, 55);
    txt6.update();
    t6 = t6 + 1;
  } else if (t6 === 2) {
    txt6 = new Typo("너", ax, h + 132, 55);
    txt6.update();
    t6 = t6 + 1;
  } else if (t6 === 3) {
    txt6 = new Typo("너", ax - 7, h + 132, 55);
    txt6.update();
    t6 = t6 + 1;
  } else if (t6 === 4) {
    txt6 = new Typo("너", ax, h + 132, 55);
    txt6.update();
    t6 = 0;
  }

  if (t7 === 0) {
    txt7 = new Typo("지", ax, h + 167, 40);
    txt7.update();
  } else if (t7 === 1) {
    txt7 = new Typo("지", ax - 3, h + 167, 40);
    txt7.update();
    t7 = t7 + 1;
  } else if (t7 === 2) {
    txt7 = new Typo("지", ax, h + 167, 40);
    txt7.update();
    t7 = t7 + 1;
  } else if (t7 === 3) {
    txt7 = new Typo("지", ax + 6, h + 167, 40);
    txt7.update();
    t7 = t7 + 1;
  } else if (t7 === 4) {
    txt7 = new Typo("지", ax, h + 167, 40);
    txt7.update();
    t7 = 0;
  }

  if (t8 === 0) {
    txt8 = new Typo("랴", ax, h + 207, 70);
    txt8.update();
  } else if (t8 === 1) {
    txt8 = new Typo("랴", ax - 8, h + 207, 70);
    txt8.update();
    t8 = t8 + 1;
  } else if (t8 === 2) {
    txt8 = new Typo("랴", ax, h + 207, 70);
    txt8.update();
    t8 = t8 + 1;
  } else if (t8 === 3) {
    txt8 = new Typo("랴", ax + 10, h + 207, 70);
    txt8.update();
    t8 = t8 + 1;
  } else if (t8 === 4) {
    txt8 = new Typo("랴", ax, h + 207, 70);
    txt8.update();
    t8 = 0;
  }
}

function mousePressed() {
  if (
    mouseX > ax - 10 &&
    mouseX < ax + 10 &&
    mouseY > h - 10 &&
    mouseY < h + 10
  ) {
    t1 = 1;
  }

  if (
    mouseX > ax - 12 &&
    mouseX < ax + 12 &&
    mouseY > h + 8 &&
    mouseY < h + 32
  ) {
    t1 = 1;
    t2 = 1;
  }

  if (
    mouseX > ax - 14 &&
    mouseX < ax + 14 &&
    mouseY > h + 44 - 14 &&
    mouseY < h + 44 + 14
  ) {
    t1 = 1;
    t2 = 1;
    t3 = 1;
  }
  if (
    mouseX > ax - 14 &&
    mouseX < ax + 14 &&
    mouseY > h + 73 - 14 &&
    mouseY < h + 73 + 14
  ) {
    t1 = 1;
    t2 = 1;
    t3 = 1;
    t4 = 1;
  }
  if (
    mouseX > ax - 15 &&
    mouseX < ax + 15 &&
    mouseY > h + 102 - 15 &&
    mouseY < h + 102 + 15
  ) {
    t1 = 1;
    t2 = 1;
    t3 = 1;
    t4 = 1;
    t5 = 1;
  }
  if (
    mouseX > ax - 18 &&
    mouseX < ax + 18 &&
    mouseY > h + 132 - 18 &&
    mouseY < h + 132 + 18
  ) {
    t1 = 1;
    t2 = 1;
    t3 = 1;
    t4 = 1;
    t5 = 1;
    t6 = 1;
  }
  if (
    mouseX > ax - 20 &&
    mouseX < ax + 20 &&
    mouseY > h + 167 - 20 &&
    mouseY < h + 167 + 20
  ) {
    t1 = 1;
    t2 = 1;
    t3 = 1;
    t4 = 1;
    t5 = 1;
    t6 = 1;
    t7 = 1;
  }
  if (
    mouseX > ax - 25 &&
    mouseX < ax + 25 &&
    mouseY > h + 207 - 25 &&
    mouseY < h + 207 + 25
  ) {
    t1 = 1;
    t2 = 1;
    t3 = 1;
    t4 = 1;
    t5 = 1;
    t6 = 1;
    t7 = 1;
    t8 = 1;
  }

  //fill(171, 211, 242, 10);
  //rect(-100, -100, width + 100, height + 100);
}

class Typo {
  constructor(txt, x, y, s) {
    this.txt = txt;
    this.px = x;
    this.py = y;
    this.s = s;
  }

  update() {
    textAlign(CENTER, CENTER);
    //textSize(max(mouseX, 1));
    fill("#5D5D5D");
    textSize(this.s);
    text(this.txt, this.px, this.py);
  }
}

class Doll {
  constructor(txt, x, y) {
    this.txt = txt;
    this.px = x;
    this.py = y;
  }

  drawn() {
    textAlign(CENTER, CENTER);
    //textSize(max(mouseX, 1));
    let d = dist(mouseX, mouseY, this.px, this.py);
    textSize(max(70 - d * 2, 40));
    fill("#5D5D5D");
    text(this.txt, this.px, this.py);
  }
}
