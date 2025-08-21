import { useState } from "react"

function Counter() {

    const [count, setCount] = useState(0)

    function add() {
        setCount((prevCount) => {
            console.log(prevCount)
            return prevCount + 1
        })
    }

    function substract() {
        setCount((prevCount) => prevCount - 1)
    }

    return (
        <section className="flex flex-col justify-center items-center text-white">
            <h1>Contador simple</h1>
            <div className="flex gap-2">
                <button onClick={substract} className="cursor-pointer">-</button>
                <h2
                    className="border flex justify-center items-center p-3 w-10 h-10 rounded-full bg-white text-black"
                >
                    {count}
                </h2>
                <button onClick={add} className="cursor-pointer">+</button>
            </div>
        </section>
    )
}

export default Counter