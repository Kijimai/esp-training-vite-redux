import { useAuth0 } from "@auth0/auth0-react"
import { Navigate } from "react-router-dom"
import { toast } from "react-toastify"

const PrivateRoute = ({ children }) => {
  const { user } = useAuth0()

  if (!user) {
    toast.warn("You do not have permission to view this page! Please login or register to view the dashboard.")
    
    return <Navigate to="/" />
  }

  return children
}

export default PrivateRoute
