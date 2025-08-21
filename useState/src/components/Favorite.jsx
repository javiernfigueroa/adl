import { useState } from "react"

function FavoriteList() {

    // ['UNO', 'DOS', 'TRES']

    const [myFavorites, setMyfavorites] = useState([])

    const allFavorites = ['UNO', 'DOS', 'TRES', 'CUATRO', 'CINCO', 'SEIS']

    function addFavorite() {
        setMyfavorites(prevFavorites => {
            return [
                ...prevFavorites,
                allFavorites[prevFavorites.length]
            ]
        })
    }

    const favoritesElements = myFavorites.map(favorite => <p key={favorite}>{favorite}</p>)

    return (
        <section className="mt-10 mb-10">
            <button
                className="border px-4 py-2 bg-white text-black rounded-full t"
                onClick={addFavorite}
            >
                Agregar
            </button>
            {/* renderizar los favoritos */}
            <div className="text-white flex flex-col justify-center items-center ">
                {favoritesElements}
            </div>

        </section>
    )
}

export default FavoriteList