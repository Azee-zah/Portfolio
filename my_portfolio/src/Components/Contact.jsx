
function Contact() {
    return(
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold">Contact Me</h2>
                <p className="text-gray-600 mt-2">For collaborations or see more ? Send a mail or find me on Github and/or LinkedIn</p>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="mailto:olamideakinleye800@gmail.com" className="inline-flex items-center gap-2 border border-green-200 text-green-700 text-lg px-5 py-2 rounded-lg hover:bg-green-200">Email me 📩</a>
                    <div className="flex gap-2">
                        <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-green-200 text-green-700 hover:bg-green-200">Github</a>
                        <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-green-200 text-green-700 hover:bg-green-200">LinkedIn</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact