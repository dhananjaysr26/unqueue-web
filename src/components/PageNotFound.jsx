import React from 'react'
import PagePic from "../assets/PageNotFound.png";
import "../styles/PageNotFound.css"
import { useHistory } from "react-router-dom";
function PageNotFound() {
    let history = useHistory();
    return (
        <div className="container">
            <h1 className="page__head">Sorry Page Not Found!</h1>
            <img src={PagePic} alt="Page Not Found" className="page_not_found_image"/>
            <div className="button-box">
            <button className="result-btn" onClick={() => { history.push("/") }} style={{textAlign:"center"}}>Back to Home</button>
            </div>
            </div>
    )
}

export default PageNotFound
