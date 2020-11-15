let length
let a


function setup() {
  createCanvas(400, 400);
  length = height/3.8
  a = createSlider(0,TWO_PI, PI / 2, 0.01)
  // length = createSlider(0,200,100,10)
}

function draw() {
  background(0);
  translate(width/2, height)
  branch(length)

}

function branch(length) {
  strokeWeight(1.5)
  stroke(255)
  line(0, 0, 0, -length)
  translate(0, -length)
  if(length>3){
    push()
    rotate(a.value())
    branch(length*0.67)
    pop()
    push()
    rotate(-a.value())
    branch(length*0.67)
    pop()
  }
}