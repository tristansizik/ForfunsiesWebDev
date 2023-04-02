
import { P5CanvasInstance, ReactP5Wrapper, Sketch } from 'react-p5-wrapper'

const Drawing: Sketch = p5 => {

  let offColor;
  let onColor;
  let grid;
    p5.setup = () => {
      p5.createCanvas(600, 400, p5.WEBGL);
      offColor = p5.color(255);
      onColor = p5.color(0);
      p5.background(offColor);
      grid = drawGrid();
    }
  
    p5.draw = () => {
      p5.background(250);
      p5.normalMaterial();
      p5.push();
      p5.rotateZ(p5.frameCount * 0.01);
      p5.rotateX(p5.frameCount * 0.01);
      p5.rotateY(p5.frameCount * 0.01);
      p5.plane(100);
      p5.pop();
    };
};

function drawGrid() {
  
}


export default function RectangleSketch() {
    return <ReactP5Wrapper sketch={Drawing} />;
}