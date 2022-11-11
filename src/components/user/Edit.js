import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  let navigate = useNavigate()
  const { id } = useParams()
  const [user, setUser] = useState({
    title: '',
    body: '',
    
  })
  
  const { title,body} = user

  const onInputChange = (e) => {
    setUser({ [e.target.name]: e.target.value })
  }

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = async (e) => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    setUser(result.data)
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, user)
    navigate('/')
    console.log(user)
  }

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User</h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group form">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="title"
              value={user.title}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group form">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="body"
              value={user.body}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        

          <button className="btn btn-primary btn-block form">
            Update User
          </button>
        </form>
      </div>
    </div>
  )
}

export default Edit
