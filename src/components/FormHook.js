import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function FormHook() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [listar, setListar] = useState([]);

	const onSubmit = (data, e) => {
		console.log(data.producto + ' ' + data.precio);
		setListar([...listar, data]);
		e.target.reset();
	};
	return (
		<>
			<h1>Form Hook</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type='text'
					className='form-control my-2'
					placeholder='Producto'
					{...register('producto', {
						required: {
							value: true,
							message: 'Producto obligatorio',
						},
						maxLength: {
							value: 20,
							message: 'El producto tiene muchas letras',
						},
					})}
				/>
				<span className='text-danger text-small d-block mb-2'>
					{errors.producto && errors.producto.message}
				</span>
				<input
					type='number'
					className='form-control my-2'
					placeholder='Precio'
					{...register('precio', {
						required: {
							value: true,
							message: 'Precio obligatorio',
						},
						min: {
							value: 100,
							message: 'Precio menor a 100',
						},
						max: {
							value: 20000,
							message: 'Precio mayor a 20000',
						},
					})}
				/>
				<span className='text-danger text-small d-block mb-2'>
					{errors?.precio?.message}
				</span>
				<button className='btn btn-primary'>Enviar</button>

				<ul className='mt-2'>
					{listar.map((item, index) => (
						<li key={index}>
							{item.producto} - {item.precio}
						</li>
					))}
				</ul>
			</form>
		</>
	);
}

export default FormHook;
