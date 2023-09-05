
export default function NavBar() {
    return (
        <nav className="flex justify-between items-center p-3  w-full sm:rounded-2xl container max-w-3xl  " style={{ fontFamily: 'Inter, sans-serif' }}>

            <div className="flex items-center">
                <a href="#" className="flex items-center">
                    <img src="brand.png" alt="" className="h-8 md:h-10 mr-2" />
                    <span className="hidden sm:inline-block text-2xl">Shree L.R. Tiwari College of Engineering</span>
                    <span className="sm:hidden">SLRTCE</span>
                </a>
            </div>
            <div className="flex items-center w-fit">
                <img src='bbbp-logo.png' alt="Logo 1" className="h-10 md:h-10 mr-2" />
                <img src='logo.png' alt="Logo 2" className="h-10 md:h-10 bg-[#FFECEC] rounded-full p-1" />
            </div>
        </nav>
    )
}