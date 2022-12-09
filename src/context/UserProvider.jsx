import { useContext, createContext, useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const { loginWithRedirect, loginWithPopup, logout, user } = useAuth0()
  const [currentUser, setCurrentUser] = useState(null)
  
  useEffect(() => {
    setCurrentUser(user)
  }, [user])

  return (
    <UserContext.Provider
      value={{ loginWithRedirect, loginWithPopup, logout, user, currentUser }}
    >
      {children}
    </UserContext.Provider>
  )
}

const useUserContext = () => {
  return useContext(UserContext)
}

export { UserProvider, useUserContext }
