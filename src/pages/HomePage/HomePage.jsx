import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Nav from '../../components/Nav/Nav'

import { style } from '../../components/FormSingIn/stylesFormSignIn'

const HomePage = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    let errorE = 0
    let errorP = 0

    const emailRegex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\\.[!#-'*+/-9=?A-Z^-~-]+)*|\"(\\[\\]!#-[^-~ \\t]|(\\\\[\\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\\.[!#-'*+/-9=?A-Z^-~-]+)*|\\[[\\t -Z^-~]*])");

    if(email === "") {
      setEmailError("El email es requerido")
      errorE = 1
      setTimeout(() => {
        setEmailError("")
      }, 3000)

    } else if (!emailRegex.test(email)) {
      setEmailError("El email no es valido")
      errorE = 1

      setTimeout(() => {
        setEmailError("")
      }, 3000)
    } else {
      errorE = 0
    }

    if(password.length < 6) {
      setPasswordError("La contraseña debe tener al menos 6 caracteres")
      errorP = 1
      setTimeout(() => {
        setPasswordError("")
      }, 3000)
    }

    if(errorE === 1 || errorP === 1) {
      return
    }
    
    setEmail('')
    setPassword('')
    navigate('/search')
  }

  return (
    <>
      <Nav />

      <section className='mt-48 flex justify-center items-center'>
        <form noValidate action="" className='bg-slate-50 shadow-lg p-14 w-2/5 flex flex-col rounded-xl' onSubmit={ handleSubmit }>
          <h1 className="text-4xl font-bold mb-5 text-center">Inciar sesión en <span className='text-red-600'>Love Match</span></h1>

          <div>
            <label htmlFor="email" className={ style.label }>Email:</label>
            <input 
              type="email"
              id="email"
              name="email"
              value={ email }
              onChange={ e => setEmail(e.target.value) }
              placeholder="Ingrese su email"
              className={ emailError ? style.inputAlert : style.input }
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
              placeholder="Ingrese su contraseña" 
              className={ passwordError ? style.inputAlert : style.input }
            />

            { passwordError && <div className={ style.textAlert }>{ passwordError }</div> }
          </div>

          <button type="submit" className={ `mx-auto ${style.button}` }>Ingresar</button>
        </form>
      </section>
    </>
  )
}

export default HomePage
