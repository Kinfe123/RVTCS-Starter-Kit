import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindcssLogo from './assets/tailwindcss.svg'
import supabaseLogo from './assets/supabase.svg'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useUser } from '@clerk/clerk-react'
import {AiFillGithub} from 'react-icons/ai'
import './App.css'

function App() {
  
  const user = useUser()
  

  return (
    <div>
      <div className='flex justify-center items-center '>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <img src={tailwindcssLogo} className="logo react text-xl" alt="React logo" />
        </a>
        <a href="https://supabase.com" target="_blank" rel="noreferrer">
          <img src={supabaseLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://clerk.com/" target="_blank" rel="noreferrer">
          <img src={'https://clerk.com/_next/image?url=%2Fimages%2Fclerk-logomark-square.svg&w=1920&q=75'} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-3xl font-bold bg-gradient-to-r from-blue-500  to-red-400 bg-clip-text text-transparent to-small'>Vite + React + Supabase + Clerk + Tailwindcss</h1>
      <div className='flex flex-row justify-center items-center my-6 gap-5'>
        <button className='btn'><a href="https://rvtcs.vercel.app/">Go To Docs </a></button>
       <a href="https://github.com/Kinfe123/RVTCS-Starter-Kit"> <button className='btn flex flex-row justify-center items-center gap-2'><AiFillGithub />Get the Github</button></a>

      </div>

      {user.isSignedIn && <p>Hellow {user.user && user.user.fullName} , 👩‍💻 Welcome back</p>}
      {!user.isSignedIn && <div>
         <p className='my-2'>Signed In?</p>
            <SignedOut>
                 <SignInButton mode='modal' />
             </SignedOut>
      
      </div>}
      <div className="card">
       <SignedIn>
        <div className='absolute top-0 right-0 my-5 mx-5'>
          
        <UserButton afterSignOutUrl={window.location.href} />
        </div>
      </SignedIn>
      {/*
      Optional way to do it
      
      <SignedOut>
        <SignInButton mode='modal' />
      </SignedOut> */}
       
      </div>
     
      <p className="read-the-docs my-4">
        Click on the logos to learn more
      </p>

      <footer className='absolute bottom-0 right-0'>
        <p>Made with 😡<a href="https://bit.ly/KINFISHTECH"  rel="noreferrer" target='_blank' className='decoration-slice mx-1 my-1'>KIINFEMICHAEL TARIKU[KINFISH]</a></p>
      </footer>
     
    </div>
  )
}

export default App
