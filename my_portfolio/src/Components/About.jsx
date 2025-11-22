
function About() {
    return(
        <section id="about" className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-3xl font-bold">About Me</h2>
                    <p className="mt-4 text-gray-600 leading-relaxed font-semibold">I am a developer who enjoys actualizing clear ideas. My current focus is to build web applications, learn and integrate AI to improve healthcare particularly in drug designs and discovery workflow</p>
                    <p className="mt-4 text-gray-600 leading-relaxed font-semibold">I value readable codes, practical features and interfaces that aids simplicity</p>
                    <p className="mt-4 text-gray-600 leading-relaxed font-semibold">If you would like to collaborate or see more works, check the project section or reach out via the contact section.</p>
                </div>

                <div className="flex justify-center">
                    <p className="w-56 h-56 rounded-xl bg-green-50 flex items-center justify-center text-green-700 font-semibold">About Me</p>
                </div>
            </div>
        </section>
    )
}

export default About