import FormComponent from "../components/form"
import NavBar from "../components/partials/navBar"
export default function Register(){
    return(
        <>
        <section id="reg"  className="bg-[#FF78C4] pb-5 min-h-screen pt-2" style={{fontFamily: 'Roboto, sans-serif'}}>
        <NavBar />
        <FormComponent />
        </section>
        </>
    )
}