import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const EditPet = (props) => {
  const [pet,setPet]=useState("")
  const [name, setName]=useState("")
  const [type, setType]=useState("")
  const [description, setDescription]=useState("")
  const [skillOne, setSkillOne]=useState("")
  const [skillTwo, setSkillTwo]=useState("")
  const [skillThree, setSkillThree]=useState("")
  const [errors, setErrors]=useState({})
  const {id}= useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:8000/api/pets/' + id)
    .then(res=>{
        setName(res.data.name)
        setType(res.data.type)
        setDescription(res.data.description)
        setSkillOne(res.data.skillOne)
        setSkillTwo(res.data.skillTwo)
        setSkillThree(res.data.skillThree)
        setPet(res.data)
      }) 
      .catch(err=>console.log(err))
  },[id])
  const onSubmitHandler=(e)=>{
    e.preventDefault()
    axios.put('http://localhost:8000/api/pets/' + id,{
        name,
        type,
        description,
        skillOne,
        skillTwo,
        skillThree
    })
        .then(res=>{
            console.log(res)
            navigate("/")
        })
        .catch((err)=>{
            console.log(err.response.data.err.errors)
            setErrors(err.response.data.err.errors)
        })
}


  return (
    <div className="container">
      <h3>Edit {pet.name}</h3>
    <Link to="/">back to home</Link>

    <div className="row">
        <div className="col-4">
            <div className='form-group'>
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="name">Pet Name:</label>
                    <input className='form-control'
                            type="text" 
                            onChange={(e)=>setName(e.target.value)}
                            value={name} />
                    <label htmlFor="type">Pet Type:</label>
                    <input className='form-control'
                            type="text" 
                            onChange={(e)=>setType(e.target.value)}
                            value={type} />
                    <label htmlFor="description">Pet Description:</label>
                    <input className='form-control'
                            type="text" 
                            onChange={(e)=>setDescription(e.target.value)}
                            value={description} />
                

                            <h5>Skills (optional)</h5>
                    <label htmlFor="skillOne">Skill 1:</label>
                    <input className='form-control'
                            type="text" 
                            onChange={(e)=>setSkillOne(e.target.value)}
                            value={skillOne} />
                    <label htmlFor="skillTwo">Skill 2:</label>
                    <input className='form-control'
                            type="text" 
                            onChange={(e)=>setSkillTwo(e.target.value)}
                            value={skillTwo} />
                    <label htmlFor="skillThree">Skill 3:</label>
                    <input className='form-control'
                            type="text" 
                            onChange={(e)=>setSkillThree(e.target.value)}
                            value={skillThree} />
                            {errors.name ? <p>{errors.name.message}</p>: null}
                            {errors.type ? <p>{errors.type.message}</p>: null}
                            {errors.description ? <p>{errors.description.message}</p>: null}

                    <button className='btn btn-primary' type='submit'>submit</button>                    
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default EditPet