import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

const DisplayAll = (props) => {
    const [allPets, setAllPets]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets")
        .then(response=>{
            console.log(response.data)
            setAllPets(response.data)
        })
        .catch((err)=>{
            console.log(err.response)
        })

    },[]) 


    // }
  return (
    <div className='container'>
    <div className="row">
        <div className="col-8">
            <Link to="/pets/new" class="btn btn-primary">Add a pet to the shelter</Link>
            <h3>These pets are looking for a good home</h3>
        <table className='table'>
        <thead>
            <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Type</th>
            <th scope='col'>Actions</th>
            </tr>
        </thead>
        <tbody>
            {allPets.map((pet, index)=>{
                return(
                <tr key={pet._id}>
                    <td>{pet.name}</td>
                    <td>{pet.type}</td>

                    <td>
                            <Link to={`/pets/${pet._id}`}>details
                            </Link>| 
                            <Link to={`/edit/${pet._id}/edit`}>edit
                            </Link>
                        {/* <button className='btn btn-danger'
                            onClick={()=>deleteHandler(pet._id)}
                            >Delete</button> */}
                    </td>
                </tr>
                )
            })}
        </tbody>
    </table>
        </div>
    </div>
</div>
  )
}

export default DisplayAll