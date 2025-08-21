import { useState } from 'react'
import Counter from './components/Counter'
import FavoriteList from './components/Favorite'
import Post from './components/Post'

function App() {
  // let [answer, setAnswer] = useState('Yes')

  const [isInterested, setIsInterested] = useState(false)

  function handleClick() {
    setIsInterested((prevIsInt) => !prevIsInt)
  }

  return (
    <div className="flex flex-col items-center justify-center text-white">
      {/* <h1 className="mb-5">Nos interesa aprender sobre el estado?</h1>
      <button
        onClick={(handleClick)}
        className="border p-2"
      >
        {isInterested ? "yes" : "no"}
      </button> */}
      <div className='mt-10'>
        {/* <Counter /> */}
        {/* <FavoriteList /> */}
        <Post />
      </div>
    </div>
  )
}

export default App
