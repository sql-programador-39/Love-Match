import { createContext, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {

  const [user, setUser] = useState({
    "id": "7",
      "name": "Pedro Salazar",
      "email": "correo2@correo.com",
      "password": "123456",
      "genre": "male",
      "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "interests": [
        "videojuegos",
        "cine",
        "musica",
        "futbol"
      ],
      "age": 24,
      "likes": [],
      "matchs": []
  })

  return (
    <UserContext.Provider value={{
      user,
      setUser
    }}>
      { children }
    </UserContext.Provider>
  )
}

export { 
  UserProvider 
}

export default UserContext