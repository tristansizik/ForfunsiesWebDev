
import { P5CanvasInstance, ReactP5Wrapper, Sketch } from 'react-p5-wrapper'

const Drawing: Sketch = p5 => {

    p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);
  
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


export default function RectangleSketch() {
    return <ReactP5Wrapper sketch={Drawing} />;
}