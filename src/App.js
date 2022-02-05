/////// component Audio 
import Audio from './components/Audio';
///// icon react 
import {BsFillMicFill} from 'react-icons/bs';
import {BsFillMicMuteFill} from 'react-icons/bs';
/////// style Css
import './App.css';


function App() {
  let [audioURL, isRecording, startRecording, stopRecording] = Audio();
  return (
    <div className="App">
     <BsFillMicFill className='microphoneStart' onClick={startRecording} disabled={isRecording}>
        start recording
      </BsFillMicFill>
      <BsFillMicMuteFill className='microphoneEnd' onClick={stopRecording} disabled={!isRecording} type="bool">
        stop recording
      </BsFillMicMuteFill>
      <div>
      <audio src={audioURL} controls />
      </div>
      <span>
          Audio Amit Asher
      </span>

      
      
    </div>
 
    
   );
}

export default App;
