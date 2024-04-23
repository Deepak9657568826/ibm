import React from 'react'
import { Route,  Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/singup' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes
