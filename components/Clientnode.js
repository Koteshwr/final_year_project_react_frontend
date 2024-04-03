import "../App.css"
import "./Client.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import React, { useEffect } from 'react';
import axios from "axios";

const ClientNode = () => {

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    useEffect(() => {
        const videoElement = document.getElementById('video');

        if (!videoElement) {
            console.error('Video element not found');
            return;
        }

        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                videoElement.srcObject = stream;
            })
            .catch(error => {
                console.error('Error accessing the webcam:', error);
            });
    }, []);

    if (!browserSupportsSpeechRecognition) {
        return null;
    }

    const handleSendData = () => {
        if (transcript) {
            const data = { transcript };
            axios.post('http://localhost:8000/api/transcript', data)
                .then(response => {
                    console.log(response.data['result']);
                })
                .catch(error => {
                    console.error('Error sending transcript:', error);
                });
        }
    };

    return (
        <>
            <div className="container">
                <h2>Online Meeting Application</h2>
                <div className="content-wrapper">
                    <div className="video-container">
                        <video id="video" autoPlay muted></video>
                    </div>
                    <div className="main-content" >
                        {transcript}
                    </div>
                </div>
                <div className="btn-style">
                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
                    <button onClick={handleSendData}>
                        Generate Meeting Minutes
                    </button>
                </div>
                <div className="result">
                    <div className="result-text">
                        <p>Minutes of Meeiting :<br/><br/> </p>
                        <p>
                            1: The lesson learned here is we're not going to start road work until we actually get the utility trench completed so we can actually do a kind of clean.
                            <br/>2: And that is to look at three projects that they successfully completed in the last 5 years or similar.
                            <br/> 3: The remaining responsive and responsible little bitter was western united civil group.
                            <br/>4: On the project to get that completed.
                            <br/>5: Are are completed if one is taking a little longer obviously you can't go to the next one so who controls that.
                            <br/>6: There's a couple things one is the cannot start any of the road work until the giant utility trenches completed.
                            <br/>7: To provide the critical pass schedule and maintain that it'll be up to us the city and our construction management consultant to make sure that that is followed.
                            <br/>8: Benefit of critical pass schedule for thursday night or used to what that means is we have certain tasks that have to happen in a sequence.
                            <br/>9: Provides valuable education retraining opportunities and community partnerships for inmates that reduce the recidivism rate of the inmates and provides valuable service to our community.

                        </p>
                    </div>
                </div>
            </div>



        </>
    );
};

export default ClientNode;