import React, {Component} from "react"
import "./style.css"
import {Link} from "react-router-dom"
class Homepage extends Component{
    render() {
        return (

            <div className="homepage">
                <h2>speakify</h2>
                <br/>
                <Link className="Link" style={{ textDecoration: 'none' }} to="/upload">upload</Link>
                <Link className="record" style={{ textDecoration: 'none' }} to="/record">record</Link>
                <Link className="about" style={{ textDecoration: 'none' }} to="/about">about</Link>
            </div>
        );
    }
}
export default Homepage;