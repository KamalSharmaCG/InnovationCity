import React, { useRef, useState } from 'react';
import { TextureLoader, RepeatWrapping } from 'three';
import dirt from '../../Assets/Images/building2.jpg';
import dirt1 from '../../Assets/Images/building1.jpg';

function Box(props) {
	const mesh = useRef()
	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false)
	const [active, setActive] = useState(false)

	// Rotate mesh every frame, this is outside of React without overhead
	const texture = new TextureLoader().load(dirt);
	texture.wrapS = RepeatWrapping;
	texture.wrapT = RepeatWrapping;
	texture.repeat.set(4, 7);

	const texture1 = new TextureLoader().load(dirt1);
	texture1.wrapS = RepeatWrapping;
	texture1.wrapT = RepeatWrapping;
	texture1.repeat.set(4, 7);

	const arr = [12, 10, 6, 8];
	const random = Math.floor(Math.random() * arr.length);
	const arr1 = [1, 2, 3];
	const random1 = Math.floor(Math.random() * arr1.length);
	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? 1.5 : 1}
			onPointerOut={(event) => setHover(false)}>
			<boxGeometry args={[arr1[random], arr[random], 1]} />
			<meshStandardMaterial map={Math.random() < 0.5 ? texture : texture1} color={hovered ? 'hotpink' : ((Math.random() < 0.3) ? 'gray' : (Math.random() < 0.6) ? 'yellow' : 'red')} />
		</mesh>
	)
}

export default Box;