import axios from 'axios'
import React, { useEffect, useState} from 'react'
import {useParams,Link,Navigate, useNavigate} from 'react-router-dom'

const OnePet = (props) => {
    const [pet, setPet]= useState({})
    const {id}= useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets/"+id)
            .then(res=>{
                console.log(res.data)
                setPet(res.data)
            })
            .catch(err=>console.log(err))
    },[id])

    const deleteHandler =(deletedId)=>{
        axios.delete(`http://localhost:8000/api/pets/${deletedId}`)
            .then(response=>{
                console.log("this pet is deleted", response)
                navigate("/")

            })
            .catch((err)=>{
                console.log("deleting pet", err.response)
            })

    }
  return (
    <>
    <Link className='link'
        to="/">back to home</Link>
    <div>
    <button className='btn-danger'onClick={()=>deleteHandler(pet._id)}
                            >Adopt {pet.name}</button>
    </div>
        <h3>Details about: {pet.name}</h3>

        <div className='text-left'>

        </div>
        <div className='pet-info'>
            <p>Pet Type: {pet.type}</p>
            <p>Description: {pet.description}</p>
            <p>Skills: </p>{pet.skillOne},{pet.skillTwo},{pet.skillThree}

        </div>
        
    </>
  )
}

export default OnePet