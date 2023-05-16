import './App.css';
import { ImagesProvider } from './context/ImageContext';
import { ImageUploader } from './components/imageUploader/ImageUploader';
import { ImagesList } from './components/imagesList/ImagesList';

function App() {
  return (
    <div className="App">
      <ImagesProvider>
        <header className="App-header">
          <ImageUploader />
        </header>
        <ImagesList />
      </ImagesProvider>
    </div>
  );
}

export default App;
