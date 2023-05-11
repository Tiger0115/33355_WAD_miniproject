import React, {useState} from "react";
import axios from "axios";
import NewNavbar from "./NewNavbar";

export default function Register() {
	const [user, setUser] = useState({
		fullName: "",
		phone: "",
		address: "",
		ownerKey: "",
		userid: "",
		password: "",
	});

	const handleChange = (e) => {
		const {name, value} = e.target;

		setUser((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(user);
		const res = await axios.post(
			"http://localhost:8000/auth/register",
			user,
		);

		console.log(res);
	};
	return (
		<>
			<NewNavbar />

			<div className='container my-3'>
				<h3>Add New Employee</h3>
				<br />
				<form className='row g-3'>
					<div className='col-12'>
						<label
							for='inputAddress'
							className='form-label'>
							Full Name
						</label>
						<input
							name='fullName'
							onChange={handleChange}
							type='text'
							className='form-control'
							id='FullName'
						/>
					</div>

					<div className='col-md-12'>
						<label className='form-label'>
							Phone
						</label>
						<input
							name='phone'
							onChange={handleChange}
							type='text'
							className='form-control'
							id='Phone'
						/>
					</div>

					<div className='col-md-12'>
						<label className='form-label'>
							Address
						</label>
						<input
							name='address'
							onChange={handleChange}
							type='text'
							className='form-control'
							id='address'
						/>
					</div>
					<div className='col-md-12'>
						<label className='form-label'>
							Owner Key
						</label>
						<input
							name='ownerKey'
							onChange={handleChange}
							type='text'
							className='form-control'
							id='CostPerUnit'
						/>
					</div>

					<div className='col-md-12'>
						<label className='form-label'>
							User Id
						</label>
						<input
							name='userid'
							onChange={handleChange}
							type='text'
							className='form-control'
							id='userid'
						/>
					</div>

					<div className='col-md-12'>
						<label className='form-label'>
							Password
						</label>
						<input
							name='password'
							onChange={handleChange}
							type='password'
							className='form-control'
							id='password'
						/>
					</div>
					<div className='col-md-12'>
						<button
							onClick={handleSubmit}
							type='button'
							className='btn btn-primary btn-block mb-4'>
							Sign in
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
