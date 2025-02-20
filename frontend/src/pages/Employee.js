import React, { Component } from 'react'
import axios from 'axios';

class Employee extends Component {
    constructor() {
        super(); // this is required to call the constructor of the parent class (Component)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios
        .get("http://localhost:5000/") //endpoint to get data from the server
        .then(result => {
            //const { data } = result.data;
            this.setState({
                data: result.data
            })
        })
        .catch(err => {
            console.log("Error");
        });
    }

  render() {
    return (
        <>
        <div className='MyHome'>
            Employee
        </div>

        <div className='container text-center'>

            <h1>Employee</h1>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Salary</th>

                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(item => (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.lastname}</td>
                            <td>{item.salary}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    </>
    )
  }
}

export default Employee;