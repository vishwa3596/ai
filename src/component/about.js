import React, {Component} from "react";
import "./style.css"
class About extends Component {
    render() {
        return (
            <div>
                <h2 className="heading-about">
                    About
                </h2>
            <div className="about1">
                <div className="div1">
                <p>This is the project which predicts the language according to the audio file uploaded.
                    <br/>
                    <br/>
                    <br/>
                # we have used 3 types of models to predict<br/>
                <ul>
                    <li>
                        Residual Neural Network
                    </li>
                    <li>
                        Fully connected Neural Network
                    </li>
                    <li>
                        Transformer
                    </li>
                </ul>
                    <br/>
                    <br/>
                    <p>
                        # the accuracy of each model is represented by a graph and corresponding language is
                        shown in cards
                    </p>
                </p>
                </div>
                <div className="div2">
                    <p>
                        Team Members

                    </p>
                    <br/>
                    <br/>
                    <ul>
                        <li>
                            Jay Faldu
                            <br/>
                        </li>
                        <li>
                            Kinshuk Kashyap
                            <br/>
                        </li>
                        <li>
                            Vishwajit Kumar Singh
                            <br/>
                        </li>
                    </ul>
                </div>
                <div className="div3">
                    <p>
                        Demo
                        <br/>
                        <a className="link1" href="https://www.youtube.com/watch?v=QeoSnP1sPi8&feature=youtu.be"> Installation Demo </a>
                        <br/>
                        <a className="link2" href="https://www.youtube.com/watch?v=MvLY-kLlE2k&feature=youtu.be"> Working Demo </a>
                    </p>
                </div>
            </div>
            </div>
        )
    }
}
export default About;

















