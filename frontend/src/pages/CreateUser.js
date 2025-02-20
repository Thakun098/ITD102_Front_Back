import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function CreateUser() {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [salary, setSalary] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/create-user", { name, lastname, salary });
                navigate('/'); //redirect to home page


        } catch (error) {
            setMessage("Error creating user, please try again");
        }
    }

    return (
        <div className='container'>
            <h1>Create User</h1>
            {message && <p className='text-danger'>{message}</p>}

            <form onSubmit = {handleSubmit}>
                <div className="w-25 p-3">
                    <label className='form-label'>Name: {name}</label>
                    <input type="text" 
                    className="form-control"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)} 
                    required />
                </div>

                <div className="w-25 p-3">
                    <label className='form-label'>Lastname: {lastname}</label>
                    <input type="text"
                    className="form-control" 
                    value = {lastname}
                    onChange = {(e) => setLastname(e.target.value)} 
                    required />
                </div>

                <div className="w-25 p-3">
                    <label className='form-label'>Salary: {salary}</label>
                    <input type="text" 
                    className="form-control" 
                    value = {salary}
                    onChange = {(e) => setSalary(e.target.value)} 
                    required />
                </div>

                <div className="w-25 p-3">
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>

    )
}

export default CreateUser;
