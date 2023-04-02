import { Fragment, useRef, useState } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import {Mesh} from 'three'

const Box = (props : any) => {
  const ref = useRef<Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver = {(event) => setHover(true)}
      onPointerOut = {(event) => setHover(false)}
      >
        <boxGeometry args={[3,3,3]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
  );
};

export default function ThreeJsSketch() {
  const canvasRef = useRef(null);

  return ( 
    <Fragment> 
      <Canvas ref={canvasRef}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, -1, 0]} />
      </Canvas>
    </Fragment>
  );
}
