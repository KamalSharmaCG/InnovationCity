import React, { Fragment } from 'react';
import { usePlane } from "@react-three/cannon";
import { TextureLoader, RepeatWrapping } from 'three';
import { Html } from "@react-three/drei";
import styles from "./Plane.css";

function Plane(props) {
	const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
	console.log(window.location.origin);
	const texture = new TextureLoader().load(props.image);

	texture.wrapS = RepeatWrapping;
	texture.wrapT = RepeatWrapping;
	texture.repeat.set(1, 1);
	return (
		<Fragment key={ref}>
			<mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
				<boxGeometry args={props['args']} />
				<meshLambertMaterial map={texture} attach="material" color={props.color} />
			</mesh>
			{props.title ?
				<Html center position={[props.position[0], 10, props.position[2]]}>
					<div className={"talk-bubble tri-right border round btm-left-in"}>
						<div style={{ textAlign: "center" }} className={styles.talktext}>{props.title}</div>
					</div>
				</Html>
				: ""}
		</Fragment>
	);
}

export default Plane;