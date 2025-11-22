import React from "react"
function Footer() {

    const present = new Date().getFullYear()
    const name = "Olamide Akinleye"
    return(
        <footer  className="py-6 bg-white border-t border-green-400">
            <div className="max-w-5xl flex gap-5 items-center justify-center mx-auto px-6 text-center text-sm text-gray-500 font-medium">
                Built using React and Tailwind <span>© {present}</span> <span>{name}</span>
            </div>
        </footer>
    )
}

export default Footer