import React, {Component} from "react"
import "./style.css"
import {Link} from "react-router-dom"
class Homepage extends Component{
    render() {
        return (
    <div>
            <div className="homepage">
                <h2>speakify</h2>
                <br/>
                <Link className="Link" style={{ textDecoration: 'none' }} to="/upload">upload</Link>
                <p>Go here to upload the audio file</p>
                <br/>
            </div>
            <div>
                <Link className="about" style={{ textDecoration: 'none' }} to="/about">about</Link>
            </div>
        </div>
        );
    }
}
export default Homepage;