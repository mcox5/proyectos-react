import './App.css';
import Testimony from "./components/Testimony.jsx";

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimony
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shaun'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.'
        />
        <Testimony
          nombre='Shara Chima'
          pais='Nigeria'
          imagen='sara'
          cargo='Ingeniero de Software'
          empresa='ChatDesk'
          testimonio='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'
        />
        <Testimony
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de software'
          empresa='Spotify'
          testimonio='I ve always struggled with learning JavaScript. Ive taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.
          ' />

      </div>
    </div>
  );
}

export default App;
