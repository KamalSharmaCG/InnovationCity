import React, { useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas,useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import "./styles.css";
import { Camera } from './Camera';
import { Player } from './Player';


function Box(props) {
	// This reference will give us direct access to the mesh
	const mesh = useRef()
	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false)
	const [active, setActive] = useState(false)
	// Rotate mesh every frame, this is outside of React without overhead
	//useFrame(() => (mesh.current.rotation.x += 0.01))
	
	return (
	  <mesh
		{...props}
		ref={mesh}
		scale={active ? 1.5 : 1}
		onClick={(event) => setActive(!active)}
		onPointerOver={(event) => setHover(true)}
		onPointerOut={(event) => setHover(false)}>
		<boxGeometry args={[1, 2, 1]} />
		<meshStandardMaterial color={hovered ? 'hotpink' : ((Math.random()<0.3)?'orange':(Math.random()<0.6)?'lightblue':'red')} />
	  </mesh>
	)
  }

function Plane() {
	const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
	}));
	return (
		<mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
			<planeBufferGeometry attach="geometry" args={[100, 100]} />
			<meshLambertMaterial attach="material" color="green" />
		</mesh>
	);
}

createRoot(document.getElementById('root')).render(
	<Canvas>
		<OrbitControls />
		<Camera />
		<Stars />
		<ambientLight intensity={0.5} />
		<spotLight position={[10, 15, 10]} angle={0.3} />
		<Physics>
		<Player />
		<Box position={[0, 1, 5]} />
    	<Box position={[1.2, 1, 5]} />
    	<Box position={[2.4, 1, 5]} />
    	<Box position={[3.6, 1, 5]} />
		<Box position={[-5, 1, 5]} />
    	<Box position={[-6.2, 1, 5]} />
    	<Box position={[-7.4, 1, 5]} />
    	<Box position={[-8.6, 1, 5]} />
		<Box position={[0, 1, 0]} />
    	<Box position={[1.2, 1, 0]} />
    	<Box position={[2.4, 1, 0]} />
    	<Box position={[3.6, 1, 0]} />
		<Box position={[10, 1, 0]} />
    	<Box position={[11.2, 1, 0]} />
    	<Box position={[12.4, 1, 0]} />
    	<Box position={[13.6, 1, 0]} />
			<Plane />
		</Physics>
	</Canvas>
);