import React, {useState,useEffect} from "react";
import axios from "axios";
import NewNavbar from "./NewNavbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {
	auth,
	registerWithEmailAndPassword,
	signInWithGoogle,
} from "./Firebase";

// export default function Register() {
// 	const [user, setUser] = useState({
// 		fullName: "",
// 		phone: "",
// 		address: "",
// 		ownerKey: "",
// 		userid: "",
// 		password: "",
// 	});

// 	const handleChange = (e) => {
// 		const {name, value} = e.target;

// 		setUser((prevState) => {
// 			return {
// 				...prevState,
// 				[name]: value,
// 			};
// 		});
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		console.log(user);
// 		const res = await axios.post(
// 			"http://localhost:8000/auth/register",
// 			user,
// 		);

// 		console.log(res);
// 	};
// 	return (
// 		<>
// 			<NewNavbar />
// 			<div className="my-3 mx-3">
// 				<a style={{colr:"white"}} href="/Login"> Go Back</a>
// 			</div>
// 			<div className='container my-3'>
// 				<h3>Add New Employee</h3>
// 				<br />
// 				<form className='row g-3'>
// 					<div className='col-12'>
// 						<label
// 							for='inputAddress'
// 							className='form-label'>
// 							Full Name
// 						</label>
// 						<input
// 							name='fullName'
// 							onChange={handleChange}
// 							type='text'
// 							className='form-control'
// 							id='FullName'
// 						/>
// 					</div>

// 					<div className='col-md-12'>
// 						<label className='form-label'>
// 							Phone
// 						</label>
// 						<input
// 							name='phone'
// 							onChange={handleChange}
// 							type='text'
// 							className='form-control'
// 							id='Phone'
// 						/>
// 					</div>

// 					<div className='col-md-12'>
// 						<label className='form-label'>
// 							Address
// 						</label>
// 						<input
// 							name='address'
// 							onChange={handleChange}
// 							type='text'
// 							className='form-control'
// 							id='address'
// 						/>
// 					</div>
// 					<div className='col-md-12'>
// 						<label className='form-label'>
// 							Owner Key
// 						</label>
// 						<input
// 							name='ownerKey'
// 							onChange={handleChange}
// 							type='text'
// 							className='form-control'
// 							id='CostPerUnit'
// 						/>
// 					</div>

// 					<div className='col-md-12'>
// 						<label className='form-label'>
// 							Email Id
// 						</label>
// 						<input
// 							name='userid'
// 							onChange={handleChange}
// 							type='text'
// 							className='form-control'
// 							id='userid'
// 						/>
// 					</div>

// 					<div className='col-md-12'>
// 						<label className='form-label'>
// 							Password
// 						</label>
// 						<input
// 							name='password'
// 							onChange={handleChange}
// 							type='password'
// 							className='form-control'
// 							id='password'
// 						/>
// 					</div>
// 					<div className='col-md-12'>
// 						<button
// 							onClick={handleSubmit}
// 							type='button'
// 							className='btn btn-primary btn-block mb-4'>
// 							Register
// 						</button>
// 					</div>
// 				</form>
// 			</div>
// 		</>
// 	);
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate(navigate("./login"));
  }, [user, loading]);
  return (
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
      </div>
	      </div>
  );
}

export default Register;