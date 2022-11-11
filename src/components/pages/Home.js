import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [user, setUser] = useState([])
  useEffect(() => {
    loadUser()
  }, [])
  const loadUser = async () => {
    const result = await axios.get(' https://jsonplaceholder.typicode.com/posts')
    
    setUser(result.data)
  }

  const deleteUser = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    loadUser()
  }
  return (
    <div>
      <div className="container">
        <div className="py-4">
          <h1>Home Page</h1>
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
               
                <th scope="col">id</th>
                <th scope="col">title</th>
                <th scope="col">body</th>
                <th scope="col">Actions</th>
               
              </tr>
            </thead>
            <tbody>
              {user.map((user) => (
                <tr>
                 
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                  <td>{user.body}</td>
                  <td>
                    <Link
                      to={`/view/${user.id}`}
                      className="btn btn-primary m-2"
                    >
                      View
                    </Link>
                    <Link
                      to={`/user/${user.id}`}
                      className="btn btn-outline-primary m-2"
                    >
                      Edit
                    </Link>
                    <Link
                      to="/"
                      className="btn btn-danger m-2"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home
