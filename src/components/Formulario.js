import React, { useState } from 'react';

function Formulario() {
	const [datos, setDatos] = useState({
		nombre: '',
		apellido: '',
	});
	const onChangeForm = (event) => {
		setDatos({
			...datos,
			[event.target.name]: [event.target.value],
		});
	};
	const enviarDatos = (event) => {
		event.preventDefault();
		console.log(datos.nombre + ' ' + datos.apellido);
	};
	return (
		<>
			<form className='row' onSubmit={enviarDatos}>
				<h2>Formulario</h2>
				<div className='input-group mb-3'>
					<input
						type='text'
						placeholder='Ingrese su nombre'
						name='nombre'
						onChange={onChangeForm}
					/>
				</div>
				<div className='input-group mb-3'>
					<input
						type='text'
						placeholder='Ingrese su apellido'
						name='apellido'
						onChange={onChangeForm}
					/>
				</div>
				<div className='input-group mb-3'>
					<button className='btn btn-primary' type='submit'>
						Enviar
					</button>
				</div>
			</form>
			<h2>
				{datos.nombre} - {datos.apellido}
			</h2>
		</>
	);
}

export default Formulario;
