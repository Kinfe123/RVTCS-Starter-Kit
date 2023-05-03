import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindcssLogo from './assets/tailwindcss.svg'
import supabaseLogo from './assets/supabase.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='flex justify-center items-center '>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <img src={tailwindcssLogo} className="logo react text-xl" alt="React logo" />
        </a>
        <a href="https://supabase.com" target="_blank">
          <img src={supabaseLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://clerk.com/" target="_blank">
          <img src={'https://clerk.com/_next/image?url=%2Fimages%2Fclerk-logomark-square.svg&w=1920&q=75'} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='b'>Vite + React + Supabase + Clerk + Tailwindcss</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
