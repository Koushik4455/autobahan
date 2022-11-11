import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
  let navigate = useNavigate()
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    mobileno: '',
  })
  const { name, username, email, mobileno } = user

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.post('https://jsonplaceholder.typicode.com/posts', user)
    navigate('/')
  }
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Title</h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group form">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter id"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group form">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter title"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group form">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter body"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          

          <button className="btn btn-primary btn-block form">Add Title</button>
        </form>
      </div>
    </div>
  )
}

export default AddUser
