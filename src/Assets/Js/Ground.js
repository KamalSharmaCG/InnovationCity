import React from 'react';
import { usePlane } from '@react-three/cannon';
import { TextureLoader, RepeatWrapping } from 'three';
import grass from './grass.jpg';

export const Ground = props => {

  console.log(props);

  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  const texture = new TextureLoader().load(grass);

  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(100, 100);

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={props['args']} />
      <meshStandardMaterial map={texture} attach="material" color={props['color']} />
    </mesh>
  );
};
