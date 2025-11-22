import { useState } from "react"
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState('home')
    const activeLink = (name) => name === active ? "text-green-600 font-bold" : "text-gray-800 font-semibold"
    return(
        <header className="sticky top-0 z-50 bg-white">
            <div className="max-w-5xl mx-auto px-6 ">
                <div className="flex items-center justify-between py-4">
                    <p className="font-bold text-lg text-green-700">Olamide Akinleye</p>
                    <nav className="hidden md:flex gap-6 items-center">
                        <a href="#home" onClick={() => setActive('home')} className={activeLink("home")}>Home</a>
                        <a href="#about" onClick={() => setActive('about')} className={activeLink("about")}>About</a>
                        <a href="#skills" onClick={() => setActive('skills')} className={activeLink('skills')}>Skills</a>
                        <a href="#projects" onClick={() => setActive('projects')} className={activeLink('projects')}>Projects</a>
                        <a href="#contact" onClick={() => setActive('contact')} className={activeLink('contact')}>Contact</a>
                        <a href="#" className="ml-3 inline-flex items-center gap-2 px-3 py-2 rounded-full border border-green-300 text-md text-green-700 hover:bg-green-200">Github</a>
                    </nav>
                
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 text-2xl font-bold md:hidden">
                    {isOpen ? '✕' : '☰'}
                    </button>
                </div>

                {isOpen && (
                    <div className="py-4 border-t md:hidden">
                        <div className="flex flex-col gap-4">
                            <a href="#home" className="font-semibold hover:bg-green-400 rounded-lg px-2">Home</a>
                            <a href="#about" className="font-semibold hover:bg-green-400 rounded-lg px-2">About</a>
                            <a href="#skills" className="font-semibold hover:bg-green-400 rounded-lg px-2">Skills</a>
                            <a href="#projects" className="font-semibold hover:bg-green-400 rounded-lg px-2">Projects</a>
                            <a href="#contact" className="font-semibold hover:bg-green-400 rounded-lg px-2">Contact</a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
    
}

export default Navbar