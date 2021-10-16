import React from 'react';

function Jsx() {
	// const saludo = 'Hola mundo';
	const temperatura = 11;
	return (
		<>
			<h2>Frío o Calor?</h2>
			<h4>{temperatura <= 20 ? 'Frío' : 'Caliente'}</h4>
		</>
	);
}

export default Jsx;
