import React, { useState } from 'react';

function Contador({ num }) {
	const [count, setCount] = useState(num);
	const sumar = () => {
		setCount(count + 1);
	};
	const restar = () => {
		setCount(count - 1);
	};
	const reset = () => {
		setCount(count - count);
	};
	return (
		<>
			<h1>Contador xd</h1>
			<p>{count}</p>
			<button onClick={restar}>Restar</button>
			<button onClick={reset}>Reset</button>
			<button onClick={sumar}>Sumar</button>
		</>
	);
}

export default Contador;
