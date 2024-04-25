import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

import TagForm from "../TagForm/TagForm"
import useUser from "../../hooks/useUser"

import { style } from "./stylesFormSignIn"


const FormSingIn = () => {

  const navigate = useNavigate()

  const { user, setUser } = useUser()

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")
  const [age, setAge] = useState("")
  const [ageError, setAgeError] = useState("")
  const [genre, setGenre] = useState("0")
  const [genreError, setGenreError] = useState("")
  const [interests, setInterests] = useState([])
  const [interestsError, setInterestsError] = useState("")
  
  const handleSubmit = (e) => {

    e.preventDefault()

    let emailE = 0
    let passwordE = 0
    let nameE = 0
    let ageE = 0
    let genreE = 0
    let interestsE = 0

    const emailRegex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    if(email === "") {
      setEmailError("El email es requerido")
      emailE = 1
      setTimeout(() => {
        setEmailError("")
      }, 3000);

    } else if (!emailRegex.test(email)) {
      setEmailError("El email no es valido")
      emailE = 1
      setTimeout(() => {
        setEmailError("")
      }, 3000);
    } else {
      emailE = 0
    }

    if(password.length < 6) {
      setPasswordError("La contraseña debe tener al menos 6 caracteres")
      passwordE = 1
      setTimeout(() => {
        setPasswordError("")
      }, 3000)
    } else {
      passwordE = 0
    }

    if(name === "") {
      setNameError("El nombre es requerido")
      nameE = 1
      setTimeout(() => {
        setNameError("")
      }, 3000)
    } else {
      nameE = 0
    }

    if(age < 18) {
      setAgeError("Debes ser mayor de edad para registrarte")
      ageE = 1
      setTimeout(() => {
        setAgeError("")
      }, 3000)
    } else {
      ageE = 0
    }

    if(genre === "0") {
      setGenreError("Debes seleccionar un genero")
      genreE = 1
      setTimeout(() => {
        setGenreError("")
      }, 3000)

    } else {
      genreE = 0
    }

    if(interests.length < 2) {
      setInterestsError("Debes agregar por lo menos 3 interes")
      interestsE = 1
      setTimeout(() => {
        setInterestsError("")
      }, 3000)

    } else {
      interestsE = 0
    }

    if(emailE === 1 || passwordE === 1 || nameE === 1 || ageE === 1 || genreE === 1 || interestsE === 1) {
      return
    }

    setUser({
      email,
      password,
      name,
      age,
      interests,
      genre,
      likes: [],
      matchs: []
    })

    const url = "http://localhost:5000/users"

    axios.post(url, {
      id: Math.floor(Math.random() * 1000) * new Date().getTime(),
      name,
      email,
      password,
      genre,
      interests,
      age,
      likes: [],
      matchs: []
    })

    console.log(user);

    setEmail("")
    setPassword("")
    setName("")
    setAge("")
    setInterests([])

    navigate("/search")
  }

  return (
    <>
      <form action="">
        <div>
          <label htmlFor="email" className={ style.label }>Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={ email } 
            onChange={ e => setEmail(e.target.value) }
            className={ emailError ? style.inputAlert : style.input }
            placeholder="Ingrese su email"
          />

          { emailError && <div className={ style.textAlert }>{ emailError }</div> }
        </div>

        <div>
          <label htmlFor="password" className={ style.label }>Contraseña:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={ password }
            onChange={ e => setPassword(e.target.value) }
            className={ passwordError ? style.inputAlert : style.input }
            placeholder="Ingrese su contraseña"
          />

          { passwordError && <div className={ style.textAlert }>{ passwordError }</div> }
        </div>

        <div>
          <label htmlFor="name" className={ style.label }>Nombre:</label>
          <input 
            type="text" 
            id="name"
            name="name" 
            value={ name }
            onChange={ e => setName(e.target.value) }
            className={ nameError ? style.inputAlert : style.input }
            placeholder="Ingrese su nombre"
          />

          { nameError && <div className={ style.textAlert }>{ nameError }</div> }
        </div>

        <div>
          <label htmlFor="age" className={ style.label }>Edad:</label>
          <input 
            type="number" 
            id="age" 
            name="age" 
            value={ age }
            onChange={ e => setAge(e.target.value) }
            className={ ageError ? style.inputAlert : style.input }
            placeholder="Ingrese su edad"
          />

          { ageError && <div className={ style.textAlert }>{ ageError }</div> }
        </div>

        <div>
          <label htmlFor="genre" className={ style.label }>Genero:</label>
          <select 
            onChange={ e => setGenre(e.target.value) } 
            name="genre" 
            id="genre"
            className={ genreError ? style.inputAlert : style.input }
          >
            <option value="0"> --Seleccione una opcion-- </option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>

          { genreError && <div className={ style.textAlert }>{ genreError }</div> }
        </div>

        <div>
          <label htmlFor="tags" className={ style.label }>Intereses:</label>
          <TagForm 
            interests={ interests } 
            setInterests={ setInterests } 
            interestsError={ interestsError }
          />
        </div>

      </form>
      
      <div className="flex justify-center">
        <button onClick={ handleSubmit } className={ style.button }>Enviar</button>
      </div>
    </>
  )
}

export default FormSingIn
