import { useState } from 'react'
import './App.css'
import Card from './utilities/cardbs.tsx'

function App() {
  const [count, setCount] = useState(0)

  function test(){
    setCount(count+1)
  }
  return (
    <>
    <h1 className='text-center'>    </h1>
      Test components:
      <Card color='white' bgColor='black' image='../public/IMG_20240620_180637.jpg' onclick={test}  btn='Aumenta counter' title='Card' description='la mia prima card' link='https://github.com/' linkTitle='vai al link'></Card>
      <div>{count}</div>
    </>
  )
}

export default App
