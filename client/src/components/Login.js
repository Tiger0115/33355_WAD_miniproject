import React, {useState} from "react";
import axios from "axios";
import NewNavbar from "./NewNavbar";

export default function Login() {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(user);

		const res = await axios.post(
			"http://localhost:8000/auth/login",
			user,
		);
	};
	return (
		<>
			<NewNavbar />
			<div className='container my-5'>
				<form className='row g-3'>
					<div className='col-6'>
						<label
							className='form-label'
							for='form2Example1'>
							Email address
						</label>
						<input
							onChange={(e) =>
								setUser({
									...user,
									email: e
										.target
										.value,
								})
							}
							type='email'
							id='form2Example1'
							className='form-control'
						/>
					</div>

					<br />
					<div className='col-6'>
						<label
							className='form-label'
							for='form2Example2'>
							Password
						</label>
						<input
							onChange={(e) =>
								setUser({
									...user,
									password: e
										.target
										.value,
								})
							}
							type='password'
							id='form2Example2'
							className='form-control'
						/>
					</div>

					<div className='col-6'>
						<div className='col d-flex justify-content-center'>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='checkbox'
									value=''
									id='form2Example31'
									checked
								/>
								<label
									className='form-check-label'
									for='form2Example31'>
									Remember
									me
								</label>
							</div>
						</div>

						<div className='col-6'>
							<a href='#!'>
								Forgot password?
							</a>
						</div>
					</div>

					<button
						onClick={handleSubmit}
						type='button'
						className='btn btn-primary btn-block mb-4'>
						Sign in
					</button>

					<div className='col-12'>
						<p>
							Not a member?{" "}
							<a href='/'>Register</a>
						</p>
					</div>
				</form>
			</div>
		</>
	);
}
