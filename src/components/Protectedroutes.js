import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function Protectedroutes() {
const user = null
return user ? <Outlet/> : <Navigate to="/login"/>
}

export default Protectedroutes