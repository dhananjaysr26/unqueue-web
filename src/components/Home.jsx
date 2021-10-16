import React from 'react'
import "../styles/Home.css"
import { useHistory } from "react-router-dom";
function Home() {
    let history = useHistory();
    return (
        <div className="container">
            <div className="slider-image"></div>
            <div className="button-box">
                <button className="result-btn mrl10" onClick={() => { history.push("/register") }}>Be a Unqueue Partner</button>
            </div>
            <div className="steps_container">
                <h1 style={{marginBottom:"10px"}}>Step to Use UnQueue For Your Business:</h1>
                <div className="card">
                    <div className="circle">
                        <h2>01</h2>
                    </div>
                    <div className="card_content">
                        <p>Make A Partner Account with UnQueue </p>
                        <a href="">Create Account</a>
                    </div>
                </div>
            </div>
            <div className="steps_container">
                <div className="card">
                    <div className="circle">
                        <h2>02</h2>
                    </div>
                    <div className="card_content">
                        <p>Create A Qroom and get Qroom ID</p>
                        <a href=""></a>
                    </div>
                </div>
            </div>

            <div className="steps_container">
                <div className="card">
                    <div className="circle">
                        <h2>03</h2>
                    </div>
                    <div className="card_content">
                        <p>Stick Qr-Code on your Shop for Customer to Connect   </p>
                        <a href="">Read More</a>
                    </div>
                </div>
            </div>

            <div className="steps_container">
                <div className="card">
                    <div className="circle">
                        <h2>04</h2>
                    </div>
                    <div className="card_content">
                        <p>Guide Your Customer to Download Unqueue App </p>
                        <a href="">App Link</a>
                    </div>
                </div>
            </div>

            <div className="steps_container">
                <div className="card">
                    <div className="circle">
                        <h2>05</h2>
                    </div>
                    <div className="card_content">
                        <p>Explore Unqueue App </p>
                        <a href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
