import "./index.css"
// import React from 'react'

const Navbar = () => {
    return (
        <>
            <header className="xl:text-2xl">
                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                </nav>
            </header>
            <h1 className="mt-4 text-center font-semibold  text-2xl"><span className="text-blue-500 mx-3 text-3xl font-bold">TypeScript</span>Quiz App</h1>

        </>
    )
}

export default Navbar