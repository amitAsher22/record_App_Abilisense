/////// component Audio 
import Audio from './components/Audio';




/////// style Css
import './App.css';

function App() {
  let [audioURL, isRecording, startRecording, stopRecording] = Audio();
  return (
    <div className="App">
      <audio src={audioURL} controls />
      <button onClick={startRecording} disabled={isRecording}>
        start recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        stop recording
      </button>

      <p>
        <em>
          Audio Amit Asher
        </em>
      </p>
    </div>
 
    
   );
}

export default App;
