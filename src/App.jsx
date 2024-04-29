import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login'

function App() {
 
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
    <Login isLogged={isLogged} setIsLogged={setIsLogged}/>
    </>
  )
}

export default App
