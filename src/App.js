import "./Assets/Styles/styles.css";
import PlaneApi from "./JsonApi/Plane.json";
import Plane from "./Components/Plane/Plane";
import Box from "./Components/Box/Box";
import Tourus from "./Components/Tourus/Tourus";
import { Canvas } from '@react-three/fiber'
import { Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Controls from "./Assets/Js/controls";

let camPosition = 0;

const App = () => {
	let world = [];
	let stem = [];

	for (let i = -9; i < 12; i++) {
		stem.push(
			<Tourus position={[46, 0, i * 4]} args={[5, 5, 40, 9]} color="brown" scale={0.1} attach="material" />
		)
		stem.push(
			<Tourus position={[46, 3, i * 4]} args={[5, 20, 32]} color="green" scale={0.1} attach="material" />
		)

	}

	for (let i = -9; i < 12; i++) {
		stem.push(
			<Tourus position={[53, 0, i * 4]} args={[5, 5, 40, 9]} color="brown" scale={0.1} attach="material" />
		)
		stem.push(
			<Tourus position={[53, 3, i * 4]} args={[5, 20, 32]} color="green" scale={0.1} attach="material" />
		)

	}

	for (let i = 0; i < 60; i++) {
		console.log(parseInt(5 + (i / 10)));
		world.push(
			<Box position={[(i - (parseInt(i / 10) * 10)) * 3 + 7, 0, 5 * parseInt((i / 10 + 1)) + parseInt((i / 10))]} />

		);
	}

	for (let i = 0; i < 60; i++) {
		console.log(parseInt(5 + (i / 10)));
		world.push(
			<Box position={[(i - (parseInt(i / 10) * 10)) * 3 + 67, 0, 5 * parseInt((i / 10 + 1)) + parseInt((i / 10))]} />

		);
	}

	for (let i = 0; i < 60; i++) {
		console.log(parseInt(5 + (i / 10)));
		world.push(
			<Box position={[(i - (parseInt(i / 10) * 10)) * 3 + 7, 0, 100 + 5 * parseInt((i / 10 + 1)) + parseInt((i / 10))]} />

		);
	}

	return (
		<Canvas camera={{ position: [camPosition, 20, 50] }}>
			<Controls />
			<Stars />
			<ambientLight intensity={2} />
			<Physics>

				{stem}
				{world}
				{
					PlaneApi.map((item) => {
						return <Plane position={item.position} color={item.color} args={item.args} title={item.label} image={item.image} key={item.id} />
					})
				}

			</Physics>
		</Canvas>
	)
};

export default App;