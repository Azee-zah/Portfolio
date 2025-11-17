import react from 'react'
import pics from '/src/assets/pics.jpg'
function Home() {
    return(
  /* the hero section */
    <div id="home" className="min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto w-full px-6 py-16">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                         Hi, I am <span className="text-green-600">Olamide Akinleye</span>
                        <br/> I build clean, simple and smart web applications
                    </h1>
                    <p className="mt-6 text-gray-600 max-w-xl">A Web Developer with a growing interest in apllications of AI in the healthcare system. I focus on readable code, clean UI and practical projects that show impacts</p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="#projects" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md">View Projects</a>
                        <a href="#" className="inline-flex items-center gap-2 border border-green-600 text-green-600 px-5 py-2 rounded-lg hover:bg-green-50">Download Resume</a>
                    </div>
                </div>

                <div className="md:max-w-1/2 flex justify-center">
                    <div> 
                        <img className="w-80 h-80 rounded-full object-cover bg-gray-200 justify-center shadow-md" src="src/assets/pics.jpg" alt="profilepics" />
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    )
}
export default Home