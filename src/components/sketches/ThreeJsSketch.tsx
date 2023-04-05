import { Fragment, useRef, useState } from "react";
import { Canvas, RootState, useFrame } from '@react-three/fiber';
import { Scroll, ScrollControls, useScroll } from '@react-three/drei';
import {Mesh} from 'three'

const Box = (props : any) => {
  const ref = useRef<Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState(0);

  const data = useScroll();
  data.range = 0;
  
  // useFrame((state, delta) => (ref.current.rotation.x += delta));
  useFrame( () => {
              // ref.current.rotation.x += .01;
              const a = data.range(0 , 1 / 3);
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onPointerMove={() => {
        setPosition(prevPosition => {
          ref.current.rotation.y = prevPosition;
          return prevPosition -.01;
        });
      }}
      onClick={(event) => {
        setActive(!active);
      }}
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
        <Box position={[0, 0, 0]} />
        <ScrollControls>
          <Box position = {[0,0,0]} /> 
        </ScrollControls>
      </Canvas>
    </Fragment>
  );
}
