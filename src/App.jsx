import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Typography from '@mui/material/Typography';
import Card from './components/Card.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Typography/>
     <Card/>
    </>
  )
}

export default App
