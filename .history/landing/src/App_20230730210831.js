import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import ImageCard from './components/ImageCard';
import image1 from './assets/more1.png';
import image2 from './assets/more2.png';
import image3 from './assets/more3.png';
import image4 from './assets/more4.png';
import './App.css';

function App() {
  const imageCards = [
    {
      id: 1,
      src: image1,
      alt: 'Random Image 1',
      title: 'Random Image 1'
    },
    {
      id: 2,
      src: image2,
      alt: 'Random Image 2',
      title: 'Random Image 2'
    },
    {
      id: 3,
      src: image3,
      alt: 'Random Image 3',
      title: 'Random Image 3'
    },
    {
      id: 4,
      src: image4,
      alt: 'Random Image 4',
      title: 'Random Image 4'
    }
  ];

  return (
    <div className="App">
      <Header />
      <div className="image-cards-container">
      {imageCards.map((card) => (
        <ImageCard
          key={card.id}
          src={card.src}
          alt={card.alt}
          title={card.title}
        />
      ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;