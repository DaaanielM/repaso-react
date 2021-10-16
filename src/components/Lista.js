import React, { useState } from 'react';

function Lista() {
	const [nums, setNums] = useState([1, 2, 3, 4, 5]);
	const [numero, setNumero] = useState(6);
	const aggElement = () => {
		setNumero(numero + 1);
		setNums([...nums, numero]);
	};

	// const arrayUno = ['Chile', 'Argentina'];
	// const arrayDos = ['Perú', 'Mexico'];

	// const Unidos = [...arrayUno, ...arrayDos];
	// console.log(Unidos);

	return (
		<>
			<h2>List and Keys</h2>
			<button onClick={aggElement}>Agregar</button>

			<ul>
				{nums.map((n, i) => (
					<li key={i}>
						Posición: {i} - {n}{' '}
					</li>
				))}
			</ul>
		</>
	);
}

export default Lista;
