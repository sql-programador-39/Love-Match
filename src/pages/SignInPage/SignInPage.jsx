import imageForm from "../../assets/imageForm.jpg"
import FormSingIn from "../../components/FormSingIn/FormSingIn"

const SignInPage = () => {
  
  return (
    <>
    <div className="h-screen">

      <div className="grid grid-cols-2">
        <div >
          <img className="h-screen w-full object-cover" src={imageForm} alt="" />
        </div>

        <div className="w-2/3 m-auto">
          <h1 className="text-6xl font-bold text-center mb-10">Love Match</h1>
          <h2 className="text-2xl text-center">Se parte de nuestra gran comunidad, el <span className="text-3xl font-bold text-red-600 text-center">amor</span> esta a la vuelta de la esquina.</h2>
  
          <FormSingIn />
        </div>
      </div>
    </div>

    </>
  )
}

export default SignInPage
