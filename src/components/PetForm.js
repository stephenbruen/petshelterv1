import React, { useEffect ,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const PetForm = () => {
    const [name, setName]=useState("")
    const [type, setType]=useState("")
    const [description, setDescription]=useState("")
    const [skillOne, setSkillOne]=useState("")
    const [skillTwo, setSkillTwo]=useState("")
    const [skillThree, setSkillThree]=useState("")
    const [errors, setErrors]=useState({})
    const navigate = useNavigate()

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/pets",{
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
    <h3>Know a pet needing a home?</h3>
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
                    
                                <p>Skills (optional)</p>
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
                        {/* </div> */}
                                {errors.name ? <p>{errors.name.message}</p>: null}
                                {errors.type ? <p>{errors.type.message}</p>: null}
                                {errors.description ? <p>{errors.description.message}</p>: null}
                        <button className='btn btn-primary' type='submit'>Add Pet</button>                    
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PetForm