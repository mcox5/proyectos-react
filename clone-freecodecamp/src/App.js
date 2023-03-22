import './App.css';
import Testimony from "./components/Testimony.jsx";

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimony
          nombre='Emma Bostian'
          pais='Suecia'
          imagen=''
          cargo='Ingeniera de software'
          empresa='Spotify'
          testimonio='I ve always struggled with learning JavaScript. Ive taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.
          ' />
      </div>
    </div>
  );
}

export default App;
