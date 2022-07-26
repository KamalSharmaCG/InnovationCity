import React, { useRef } from 'react';

function Tourus(props) {
	const ref = useRef(null);
	console.log(props);
	return (
		<mesh visible position={props.position} castShadow ref={ref} scale={props.scale}>
			<cylinderGeometry args={props.args} />
			<meshStandardMaterial attach={props.attach} color={props.color} />
		</mesh>

	);
}

export default Tourus;