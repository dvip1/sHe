import NavBar from "../components/partials/navBar"
import '../index.css'

export default function Home() {
  return (
    <>
      <section id="hero" className="bg-[#FF78C4] pb-5 min-h-screen pt-2">
        <div className="center flex justify-center ">
          <NavBar />
        </div>
        <div className="center flex justify-center p-2 overflow-hidden">
          <div className="hero-container flex flex-col md:flex-row items-center max-w-4xl ">
            <img src="sheBox.png" alt="Hero Image" className="w-full md:w-1/2 md:order-1" />
            <div className="text-center md:text-left md:order-2 relative pt-10 xl:ml-10">
              <h1 className="text-4xl font-bold mb-4 lg:text-6xl text-[#FFECEC] ">Your voice matters.</h1>
              <p className="mb-8 text-base lg:text-xl text-gray-700">File a complaint of harassment with SHe-Box today.</p>
              <div className="flex justify-center md:justify-start">
                <a href="#" className="bg-[#FFBDF7] py-2 px-4 rounded-xl mr-4 shadow-lg hover:shadow-xl transform hover:-translate-y-2 duration-200">Register Your <br /> Complaint</a>
                <a href="#" className="bg-[#cccce0] py-2 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 duration-200">View Status of <br /> Your Complaint</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}