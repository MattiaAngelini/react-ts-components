//TEST COMPONENTI
import { useState } from 'react'
import './App.css'
import Card from './utilities/card.tsx'
import Hero from './sections/hero.tsx'
import Header from './sections/header.tsx'
import Carousel from './utilities/carousel.tsx'
import { SlideModel } from './models/slideModel.ts'

function App() {
  const [count, setCount] = useState(0)
  //links per testare props header
  const headerNavLinks = [
    { id: 1, text: 'Home', url: '/' },
    { id: 2, text: 'Chi siamo', url: '/about' },
    { id: 3, text: 'Servizi', url: '/services' },
    { id: 4, text: 'Contatti', url: '/contact' },
  ];

 // Slides per testare carosello
const slides = [

  new SlideModel(
    1,
    "Team Collaboration",
    "Work together seamlessly from anywhere in the world",
    "../public/glaciora_back.jpg.webp"
  ),
  new SlideModel(
    2,
    "Security First",
    "Enterprise-grade protection for your data",
    "./../public/voidon_front.jpg.webp"
  ),
  new SlideModel(
    3,
    "Digital Innovation",
    "Transform your business with cutting-edge technology",
    "./../public/flareon_front.jpg.webp"
  ),
  new SlideModel(
    4,
    "Team Collaboration",
    "Work together seamlessly from anywhere in the world",
    "../public/glaciora_back.jpg.webp"
  ),
  new SlideModel(
    5,
    "Security First",
    "Enterprise-grade protection for your data",
    "./../public/voidon_front.jpg.webp"
  )
];

  // function test(){
  //   window.location= 'https://github.com/MattiaAngelini/react-ts-components';
  // }

  return (
    <>
    <Header logoImg="./../public/flareon_front.jpg.webp" 
            arrayLinks={headerNavLinks} 
            bgColor='green' 
            textColor='red'>
    </Header>
    
    <h1 className='text-center'>     Test components:  </h1>
 
    <Carousel urlMainImage={slides[0].imageUrl} slideArray={slides}></Carousel>

    {/* <Hero 
      textColor='white'
      mediaUrl='../public/heroVIdeo.mp4'  
      video={true}
      title='Titolo hero'
      description='Benvenuti sul mio profilo'
      button={{
        title: 'vai',
        bgColor: 'red',
        color: 'yellow',
        onClick: test,
        width: '100px',
        padding: '10px',
        className: 'btn'
      }}
      >
      </Hero>
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
      /> */}
    </>
  )
}

export default App
