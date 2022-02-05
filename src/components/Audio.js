import { useEffect, useState } from "react";

//// firebase connection 
// import {firebase} from '../firebase/Firebase.js'

const Audio = () => {
  const [audioURL, setAudioURL] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState(null);

  useEffect(() => {

    if (recorder === null) {
      if (isRecording) {

        requestRecorder().then(setRecorder, console.error);
      }
      return;
    }


    if (isRecording) {
      recorder.start();
    } else {
      recorder.stop();
    }


    let handleData = e => {

      // var storageRef = firebase.storage.ref("folderName/file.jpg");
      // // var fileUpload = document.getElementById("fileUpload");
      // // fileUpload.on(‘change’, function(evt) {
      // //   var firstFile = evt.target.file[0]; // get the first file uploaded
      // //   var uploadTask = storageRef.put(firstFile);
      // // });
      setAudioURL(URL.createObjectURL(e.data));//to create an object Url and get data (blob) from MediaRecord.
      console.log( "e.data",e.data);
      console.log( "URL.createObjectURL(e.data)",URL.createObjectURL(e.data));
      
     
    };

    recorder.addEventListener("dataavailable", handleData); /// 3 process -  dataavailable is event to worker this event when MediaRecord deliverd data yo your aplication (blob)
    return () => recorder.removeEventListener("dataavailable", handleData);
  }, [recorder, isRecording]);

  let startRecording = () => {
    setIsRecording(true);
  };

  let stopRecording = () => {
    setIsRecording(false);
  };

  return [audioURL, isRecording, startRecording, stopRecording]; /// send back to App.js (props)
};

async function requestRecorder() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true }); //// one process - get MediaStream  (containing  array 0f objects of data)
    return new MediaRecorder(stream); /// 2 process - MediaRecorder have to accept mediaStream (stream) to record  - to mediaRecord have many methouds to start ,pause ,resume ,stop recording.

  } catch (error) {
    console.log('this is error message - you dont record', error)
  }

}
export default Audio;


