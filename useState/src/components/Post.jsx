import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

function Post() {


    const [userPost, setUserPost] = useState({
        firstName: 'John',
        lastName: 'Doe',
        profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcPrsBlh4r2gBX6xnX9eHSsxH__CPaXce1vg&s',
        user: '@johndoe',
        content: 'Hola a todos! estoy aprendiendo estados !!',
        isFavorite: false
    })

    const favoriteItem = userPost.isFavorite ? <AiFillHeart className="h-5 w-5" /> : <AiOutlineHeart className="h-5 w-5" />


    function toogleFavorite() {
        setUserPost((prev) => {
            return {
                ...prev,
                isFavorite: !prev.isFavorite
            }
        })
    }

    return (
        <article className="border bg-slate-200 rounded-2xl p-4">
            <div className="flex gap-3">
                <img
                    src={userPost.profilePicture}
                    alt="avatar"
                    className="h-12 w-12 rounded-full object-cover"
                />

                <div className="flex-1 min-w-0">
                    <header className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-slate-900 truncate">{userPost.firstName} {userPost.lastName}</span>
                        <span className="text-slate-500 truncate">{userPost.user}</span>
                    </header>

                    <p className="mt-1 text-slate-800 whitespace-pre-wrap">
                        {userPost.content}
                    </p>

                    <div className="mt-3 flex items-center gap-6 text-slate-500 select-none">
                        <div className="inline-flex items-center gap-2">
                            <button onClick={toogleFavorite}>
                                {favoriteItem}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Post;