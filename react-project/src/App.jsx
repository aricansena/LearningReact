import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import { courses } from './Data'
import Course from './Course'
import './css/Courses.css';

import axios from 'axios'
const BASE_URL = "http://localhost:3007";
function App() {

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data)
  }

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    console.log(response.data)
  }

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  }
  const updateUser = async (userId, updatedUser) => {
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser)
  }
  const deleteUserById = async (userId) => {
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`)
    console.log(deletedResponse.data);
  }

  useEffect(() => {
    //getAllUsers();
    //getUserById(2);
    // const newUser = {
    //   "username": "name",
    //   "password": "2154"
    // }
    // createUser(newUser);
    // updateUser("1", {
    //   "username": "senaarican",
    //   "password": "2154"
    // })
    deleteUserById("0e00")
  }, [])
  return (
    <>

      {/* <Header />
      <div className='course-main'>
        {
          courses?.map((course) => (
            <Course key={course.id} course={course} />
          ))
        }
      </div> */}
      //npx json-server .\src\database.json --port 3006
    </>
  )
}
export default App

