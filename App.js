import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientNode from "./components/Clientnode";

import Home from "./components/Home/Home";
// const App = () => {
//     const [textToCopy, setTextToCopy] = useState();
//     const [isCopied, setCopied] = useClipboard(textToCopy, {
//         successDuration:1000
//     });


//     const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
//     const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

//     if (!browserSupportsSpeechRecognition) {
//         return null
//     }

//     return (
//         <>
//             <div className="container">
//                 <h2>Subtitle Generator</h2>


//                 <div className="main-content" onClick={() =>  setTextToCopy(transcript)}>
//                     {transcript}
//                 </div>

//                 <div className="btn-style">

//                     <button onClick={setCopied}>
//                         {isCopied ? 'Copied!' : 'Copy to clipboard'}
//                     </button>
//                     <button onClick={startListening}>Start Listening</button>
//                     <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>

//                 </div>

//             </div>

//         </>
//     );
// };

// export default App;

// import React, { useState } from 'react';
// import { useClipboard, useSpeechRecognition } from 'react-speech-kit';
// Add this inside your component or useEffect


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meet" element={<ClientNode />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;




