import React, { useState, useRef } from 'react';
import { useRender } from 'react-three-fiber';
import * as THREE from 'three';

import Clock from './Clock';

function Shape() {
  const [scale, setScale] = useState(1);
  const shapeRef = useRef();
  const clockRef = useRef();

  useRender(() => {
    const time = clockRef.current.getElapsedTime();
    if (time > 20) return;

    // shapeRef.current.rotation.y += 0.003;
    shapeRef.current.rotation.y = THREE.Math.degToRad(18 * time);
    shapeRef.current.position.x += 0.002;
    shapeRef.current.position.y += 0.002;
  });

  return (
    <>
      <Clock setRef={clockRef} />;
      <mesh
        ref={shapeRef}
        scale={[scale, scale, scale]}
        onClick={() => setScale(scale === 1 ? 1.5 : 1)}>
        <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
        <meshNormalMaterial attach='material' />
      </mesh>
    </>
  );
}

export default Shape;
