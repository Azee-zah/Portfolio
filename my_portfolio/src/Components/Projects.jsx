
function Projects() {
    const projects = [
        {
            id: 1,
            title: "A Basic Expense Tracker App",
            description: "Add new expense, delete, View all and track number of expense and most expensive item spent on",
            tools: ['React'],
            code: 'https://github.com/Azee-zah/Web_dev_Project/tree/master/React_project/mini_rproject/trackexpense_app'
        },

        {
            id: 2,
            title: "A Database linked to the Expense Tracker App",
            description: "Retaining expense list even after page refreshes, list is still intact",
            tools: ['React', 'FASTAPI', 'mySQL'],
            code: 'https://github.com/Azee-zah/combination'
        },

        {
            id: 3,
            title: "A Cafe Website (grouped)",
            description: "View Cafe products, place order amd add to cart",
            tools: ['HTML', 'CSS', 'JavaScript'],
            code: 'https://github.com/Azee-zah/combination'
        },
    ]

    return(
        <section id="projects" className=" bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold">Featured Projects</h2>
                <p className="mt-2 text-gray-600">Selected projects that shows both frontend and backend work</p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p) => (
                        <div key={p.id} className="rounded-2xl shadow-md border border-green-400 p-4 hover:scale-105 transition-transform">
                            <div className="h-40 rounded-lg bg-green-50 flex items-center justify-center text-green-600 font-medium">Preview</div>
                            <h3 className="mt-4 font-semibold text-lg">{p.title}</h3>
                            <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {p.tools.map((t, i) => (
                                    <span key={i} className="text-xs border border-green-200 text-green-700 px-2 py-1 rounded-full">{t}</span>
                                ))}
                            </div>

                            <div className="mt-4 flex justify-center ">
                                <a href={p.code} className="bg-green-700 px-3 py-2 rounded-md text-md border border-green-200 text-white ">Go to code</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects