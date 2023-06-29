import React from 'react'
import './Mainrecord.css'
// import { IoEyeSharp } from "react-icons/io";



const Mainrecord = () => {
    return (
        <>
            <div className="mainpage">
                <div className="record">
                    <div><h2>Recording Choice</h2></div>
                    <div className="radio">
                        <div className="video-audio"> <input type="radio" id="html" name="radio" value="html" />
                            <label For="html">Video+Audio</label><br /><br />
                        </div>
                        <div className="video-screen">
                            <input type="radio" id="html" name="radio" value="html" />
                            <label For="html">Screen+Audio</label><br /><br />
                        </div>
                        <div className="audio">
                            <input type="radio" id="html" name="radio" value="html" />
                            <label For="html">Audio</label><br /><br />
                        </div>
                        <div className="video">
                            <input type="radio" id="html" name="radio" value="html" />
                            <label For="html">Video</label><br /><br />
                        </div>
                        <div className="screen">
                            <input type="radio" id="html" name="radio" value="html" />
                            <label For="html">Screen</label>
                        </div><br /><br />
                    </div>
                    <button className='recording'><li>Start Recording</li></button>

                </div>
                <div className="record-view">
                    <h2>Recording Status</h2><br />
                    <div className="preview">
                        <h2>preview</h2>
                    </div><br />
                    <div className="record-item1">

                    </div>

                </div>
                <div className="record-item">
                    <h2>Recorded Item</h2><br />
                    <p>No Recording Found</p>
                </div>
                {/* <div className="footer">© |2023| All Right Reserved</div> */}
            </div>
        </>
    )
}

export default Mainrecord;
