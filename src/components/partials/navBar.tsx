
export default function NavBar() {
    return (
        <nav className="flex justify-between items-center w-full sm:rounded-2xl pr-5" style={{ fontFamily: 'Lora, serif' }}>

            <div className="flex items-center">
                <a href="#" className="flex items-center">
                    <img src="brand.png" alt="" className="h-8 md:h-10 mr-2 sm:hidden" />
                    <img src='cover1.png' className="hidden h-24 sm:inline-block " />
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