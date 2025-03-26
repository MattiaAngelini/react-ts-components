import { useState } from 'react'
import './App.css'
import Card from './utilities/card.tsx'

function App() {
  const [count, setCount] = useState(0)
  function test(){
    window.location= 'https://github.com/MattiaAngelini/react-ts-components';
  }

  return (
    <>
    <h1 className='text-center'>     Test components:  </h1>
    <Card 
        title='Il Titolo'
        description='la mia prima card' 
        color='white' 
        bgColor='black' 
        image='../public/IMG_20240620_180637.jpg'
        button={{
          title: 'vai',
          bgColor: 'red',
          color: 'yellow',
          onClick: test,
          width: '100px',
          padding: '10px',
          className: 'btn'
        }}
      />
    </>
  )
}

export default App
