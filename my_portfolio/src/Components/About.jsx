import { FaBrain, FaPuzzlePiece, FaCode, FaMicroscope, FaLightbulb, FaChessQueen, FaLaptopCode } from "react-icons/fa"
function About() {
    return(
        // <section id="about" className="py-20 bg-white md:grid-cols-3">
        //     <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        //         <div>
        //             <h2 className="text-3xl font-bold">About Me</h2>
        //             <h3 className="text-2xl font-bold">I Learn, I Solve, I Build</h3>
        //             <p className="mt-4 text-gray-600 leading-relaxed font-semibold">I am an AI-Developer who enjoys actualizing clear ideas. My current focus is to build web applications, learn and integrate AI to improve healthcare particularly in drug designs and discovery workflow</p>
        //             <p className="mt-4 text-gray-600 leading-relaxed font-semibold">I value readable codes, practical features and interfaces that aids simplicity</p>
        //             <p className="mt-4 text-gray-600 leading-relaxed font-semibold">If you would like to collaborate or see more works, check the project section or reach out via the contact section.</p>
        //         </div>

        //         <aside className="flex justify-center">
        //             <p className="w-56 h-56 rounded-xl bg-green-50 flex items-center justify-center text-green-700 font-semibold">About Me</p>
        //         </aside>
        //     </div>
        // </section>
        <main className="px-6 py-20 bg-white">
            <h1 className="text-3xl md:text-4xl text-center font-bold text-gray-800 mb-12">About Me</h1>
            <section id="about" className="mx-auto  grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr]">
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold text-green-600 mb-4">I Learn   I Solve   I Build.</h2>

                    <div className="text-gray-600 font-semibold italic mb-4">
                        <p>Why is it like this?</p>
                        <p>How should it be?</p>
                        <p>Then I figure it out</p>
                    </div>

                    <div className="space-y-2 leading-8 text-gray-600 font-medium max-w-prose">
                        <p>That's probably the simplest way to describe me.</p>

                        <p>When I encounter something new, my first instinct isn't to work around it but to understand it. I want to know why it works the way it does, what could make it better and what it would take to build it differently.</p>

                        <p>
                            That mindset is what keeps pulling me deeper into software engineering. I enjoy taking an idea from a question to something real — designing the <strong>frontend</strong>, building the <strong>backend</strong>, connecting APIs and databases, and exploring how <strong>AI</strong> can be integrated into applications to make them smarter and more useful. I like understanding how the pieces fit together, not just making each piece work on its own.
                        </p>

                        <p>
                            When I am not being a software engineer, I am a <strong>Research Physiologist</strong>. Research has shaped the way I think just as much as technology has — being curious about how things work, questioning what I find, looking for evidence, and being comfortable not having the answer immediately. It also draws me toward exploring technology in healthcare and the possibilities between biology and software.
                        </p>
                        
                        <p>
                            Outside of work, I enjoy sports (table-tennis, volleyball) and a good game of chess. I love music and, when I need to step away from screens, I usually put on a movie and relax.
                        </p>

                    </div>
                </div>

                <aside id="about-glance" role="complementary" className="w-full max-w-sm bg-gray-50  border border-gray-100 rounded-2xl shadow-md p-6 md:p-8 lg:sticky lg:top-24 lg:self-start">
                    <h2 id="about-glance-title" className="text-lg text-center font-bold text-green-700 mb-4 ">AT A GLANCE</h2>

                    <div className="space-y-6 font-medium text-gray-600">
                        <div className="flex gap-4">
                            <FaBrain className="mt-1 shrink-0 text-lg text-green-600"/>

                            <div>
                                <h3 className="mb-1 text-xl font-semibold text-gray-700">I Learn</h3>
                                <p className=" text-sm italic leading-6 text-gray-600">Curious about how things work and always looking to understand something deeper</p>
                            </div>
                        </div>
                        
                        <div className="flex gap-4">
                            <FaPuzzlePiece className="mt-1 shrink-0 text-xl text-green-600"/>

                            <div>
                                <h3 className="mb-1 text-xl font-semibold text-gray-700">I solve</h3>
                                <p className="text-sm italic leading-6 text-gray-600">I enjoy breaking complex problems down and figuring out a way forward</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <FaCode className="mt-1 shrink-0 text-xl text-green-600"/>

                            <div>
                                <h3 className="mb-1 text-xl font-semibold text-gray-700">I build</h3>
                                <p className="text-sm italic leading-6 text-gray-600"> Backend - APIs - Databases - Frontend - AI integration</p>
                            </div>
                        </div>

                        <div className=" pt-2 space-y-6">
                            <div className="flex gap-4">
                                <FaLaptopCode className="mt-1 shrink-0 text-xl text-green-600"/>
                                <div>
                                    <h3 className="mb-1 text-xl font-semibold text-gray-700">Software Engineer</h3>
                                    <p className="text-sm italic leading-6 text-gray-600">Build scalable software solutions</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <FaMicroscope className="mt-1 shrink-0 text-xl text-green-600"/>
                                <div>
                                    <h3 className="mb-1 text-xl font-semibold text-gray-700">Research Physiologist</h3>
                                    <p className="text-sm italic leading-6 text-gray-600">Research and critical thinking</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <FaLightbulb className="mt-1 shrink-0 text-xl text-green-600"/>
                                <div>
                                    <h3 className="mb-1 text-xl font-semibold text-gray-700">What peaks my Interest</h3>
                                    <p className="text-sm italic leading-6 text-gray-600"> - AI - Intelligent Systems - Health technology</p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <h3 className="mb-4 text-xl font-semibold text-gray-700">Beyond the Screen</h3>
                            <div className="flex flex-wrap gap-4">
                                <span className="text-sm px-3 py-1 italic text-gray-600">Music</span>
                                <span className="text-sm px-3 py-1 italic text-gray-600">Sports</span>
                                <span className="text-sm px-3 py-1 italic text-gray-600">Movies</span>
                                <span className="text-sm px-3 py-1 italic text-gray-600">Chess</span>
                            </div>
                        </div>
                    </div>
                </aside>
            </section>
        </main>
    )
}

export default About