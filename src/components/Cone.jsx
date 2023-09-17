import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function Cone({ geometryArgs }) {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.y -= 0.01;
  });

  return (
    <mesh position={[0, 1, -3]} ref={mesh}>
      <coneGeometry args={geometryArgs} />
      <meshPhongMaterial />
    </mesh>
  );
}

export default Cone;
