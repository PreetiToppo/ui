import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import ImageCard from './components/ImageCard';


function App() {

  const imageCards = [
    {
      id: 1,
      src: 'https://cdn.dribbble.com/userupload/6012665/file/original-0292d6a01076ded0d131e46889479882.png?resize=1024x768',
      alt: 'Random Image 1',
      title: 'Random Image 1'
    },
    {
      id: 2,
      src: 'https://cdn.dribbble.com/userupload/7819319/file/original-3cb0c408f7141f83392eebee878ff09e.png?resize=1024x768',
      alt: 'Random Image 2',
      title: 'Random Image 2'
    },
    {
      id: 3,
      src: 'https://cdn.dribbble.com/userupload/3640061/file/original-210dc6cee62c8b794c8d7c6c52c0aac5.png?resize=1024x768',
      alt: 'Random Image 3',
      title: 'Random Image 3'
    },
    {
      id: 4,
      src: 'https://cdn.dribbble.com/userupload/6221666/file/original-74a06304a4751d308a3734a85eae1409.png?resize=1024x768',
      alt: 'Random Image 4',
      title: 'Random Image 4'
    }
  ];
  return (
    <div className="App">
      <Header />
      <Form/>
      {imageCards.map((card) => (
        <ImageCard
          key={card.id}
          src={card.src}
          alt={card.alt}
          title={card.title}
        />
      ))}
      <Footer/>
    </div>
  );
}

export default App;
