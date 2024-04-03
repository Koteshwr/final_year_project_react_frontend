import './Home.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    const handleStart = () => {
        navigate('/meet')
    }
    const handleUpload = () => {
        window.open("http://localhost:8000")
    }
    // const handleUploadtrans = ()=>{
    //     console.log("transcript")
    // }
    return (
        <>
            <div className='nav'>
                <h1>Welcome To MoM Generation Application</h1>
            </div>
            <div className=' bgr'>
                <div className='home'>
                    <div className="Container">
                        <button className='btns' onClick={handleStart}>Start a new meeting</button>
                        <button className='btns' onClick={handleUpload}>Upload a Recorded audio</button>
                        {/* <button className='btns' onClick={handleUploadtrans}>Upload transcript</button> */}
                        <div className='remainder'>
                            <p className='text'># Upload the recorded Meeting audio file of *MP3 format to generate the minutes of meeting</p>
                            <p className='text'># Start a New Meeting button will lead You to the online meeting platform where you can have your meeting and Minutes of Meeting are Generated at the end of the meeting</p>
                            <br />
                            <br />
                            <p className='text'>
                                # Make sure to give the microphone and Camera permissions to launch the meeting application
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;