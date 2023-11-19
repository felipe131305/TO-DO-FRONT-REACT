import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/authContext"

useAuth
function ProtectedRouter() {
    const {loading, isAuthenticated} = useAuth();
    if(loading) return <h1>loading...</h1>
    if(!loading &&!isAuthenticated) return <Navigate to = 'login' replace/>

  return (
    <Outlet/>
  )
}

export default ProtectedRouter