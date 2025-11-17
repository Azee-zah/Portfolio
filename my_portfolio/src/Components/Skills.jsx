
function Skills() {
    return(
        <section id="skills" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="font-bold text-3xl">Skills</h2>
                <p className="mt-2 text-gray-600">Technologies and tools I am proficient with</p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white rounded-xl shadow-sm">
                        <h4 className="font-semibold text-xl">Frontend</h4>
                        <ul className="mt-3 space-y-2 text-sm text-gray-600 space-x-5">
                            <li className="inline-flex items-center gap-2"><span className="bg-green-500 px-4 text-white font-semibold">HTML</span></li>
                            <li className="inline-flex items-center gap-2"><span className="bg-green-500 px-4 text-white font-semibold">CSS</span></li>
                            <li className="inline-flex items-center gap-2"><span className="bg-green-500 px-4 text-white font-semibold">JavaScript</span></li>
                            <li className="inline-flex items-center gap-2"><span className="bg-green-500 px-4 text-white font-semibold">React</span></li>
                            <li className="inline-flex items-center gap-2"><span className="bg-green-500 px-4 text-white font-semibold">Tailwind</span></li>
                        </ul>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow-sm">
                        <h4 className="font-semibold text-xl">Backend</h4>
                        <ul className="mt-3 space-y-2 text-sm text-gray-600 space-x-5">
                            <li className="inline-flex items-center gap-2"><span className="bg-green-500 px-4 text-white font-semibold">Python</span></li>
                            <li className="inline-flex items-center gap-2"><span className="bg-green-500 px-4 text-white font-semibold">FASTAPI</span></li>
                            <li className="inline-flex items-center gap-2"><span className="bg-green-500 px-4 text-white font-semibold">SQL</span></li>
                            <li className="inline-flex items-center gap-2"><span className="bg-green-500 px-4 text-white font-semibold">Git/GitHub</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills