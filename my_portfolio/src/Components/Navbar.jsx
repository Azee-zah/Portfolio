import { useState } from "react"
import Logo from "./Logo"
import { FaGithub } from "react-icons/fa"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState('home')
    const activeLink = (name) => name === active ? "text-green-600 font-bold" : "text-gray-800 font-semibold"
    return(
        <header className="sticky top-0 z-50 bg-white">
            <div className="max-w-5xl mx-auto px-6 ">
                <div className="flex items-center justify-between py-4">
                    <a href="#home" onClick={() => setActive('home')} className="flex items-center gap-3" aria-label="Olamide Akinleye, home">
                        <Logo className="h-8 w-auto text-green-700" />
                        <span className="sr-only">Olamide Akinleye</span>
                    </a>
                    <nav className="hidden md:flex gap-6 items-center">
                        <a href="#home" onClick={() => setActive('home')} className={activeLink("home")}>Home</a>
                        <a href="#about" onClick={() => setActive('about')} className={activeLink("about")}>About</a>
                        <a href="#skills" onClick={() => setActive('skills')} className={activeLink('skills')}>Skills</a>
                        <a href="#projects" onClick={() => setActive('projects')} className={activeLink('projects')}>Projects</a>
                        <a href="#contact" onClick={() => setActive('contact')} className={activeLink('contact')}>Contact</a>
                        <a href="https://github.com/Azee-zah/"  target="_blank" rel="noopener noreferrer" className="ml-4 inline-flex items-center gap-2  text-md text-gray-800 hover:text-gray-600 font-semibold">
                            <FaGithub />
                            Github
                        </a>
                    </nav>
                
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 text-2xl font-bold md:hidden">
                    {isOpen ? '✕' : '☰'}
                    </button>
                </div>

                {isOpen && (
                    <div className="py-4 border-t md:hidden">
                        <div className="flex flex-col gap-4">
                            <a href="#home" onClick={() => setActive('home')} className={activeLink("home")}>Home</a>
                            <a href="#about" onClick={() => setActive('about')} className={activeLink("about")}>About</a>
                            <a href="#skills" onClick={() => setActive('skills')} className={activeLink('skills')}>Skills</a>
                            <a href="#projects" onClick={() => setActive('projects')} className={activeLink('projects')}>Projects</a>
                            <a href="#contact" onClick={() => setActive('contact')} className={activeLink('contact')}>Contact</a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
    
}

export default Navbar