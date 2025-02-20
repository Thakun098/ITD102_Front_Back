import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const UpdateUser = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [salary, setSalary] = useState("");
    const [message, setMessage] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/user/${id}`);
                setName(res.data.name);
                setLastname(res.data.lastname);
                setSalary(res.data.salary);

            } catch (error) {
                setMessage("Error Fetching User")

            }
            //ถ้า ไม่มี Dependency => useEffect() จะทำงานทุกครั้งที่ Component ทำการ render
            //ถ้า [] ว่างเปล่า => useEffect() จะทำฃานแค่ตอน mount (โหลดครั้งแรกเท่านั้น)
            //ถ้ามีค่าใน Dependency => useEffect() จะทำงานเมื่อค่าที่กำหนดเปลี่ยนแปลง
        }
        if (id) {
            fetchUser();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
           await axios
                .put(`http://localhost:5000/update-user/${id}`, { name, lastname, salary });
            navigate("/")

        } catch (error) {
            setMessage("Error Updating User. Please Try Again")

        }
    }

    return (
        <div className='container'>
            <h2>Update User</h2>
            {message && <p className='text-danger'>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className='w-25 mb-3'>
                    <label className='form-label'>Name: {name}</label>
                    <input
                        type='text'
                        className='form-control'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className='w-25 mb-3'>
                    <label className='form-label'>Lastname: {lastname}</label>
                    <input
                        type='text'
                        className='form-control'
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                    />
                </div>

                <div className='w-25 mb-3'>
                    <label className='form-label'>Salary: {salary}</label>
                    <input
                        type='text'
                        className='form-control'
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        required
                    />
                </div>
                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
        </div>
    )
}
export default UpdateUser;
