import React, { useRef } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";

import { MapControls } from "three/examples/jsm/controls/OrbitControls";

extend({ MapControls });

function Controls(props) {
  const controls = useRef();
  const { camera, gl } = useThree();
  useFrame(() => {
    controls.current.update();
  });
  return (
    <mapControls
      ref={controls}
      args={[camera, gl.domElement]}
      enableDamping={false}
      dampingFactor={0.15}
      minDistance={10}
      maxDistance={500}
      //maxPolarAngle={Math.PI / 1}
      {...props}
    />
  );
}

export default Controls;
