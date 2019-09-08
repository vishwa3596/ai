import React, {Component} from "react"
import {BrowserRouter, Route} from "react-router-dom";
import Homepage from "./Homepage";
import Upload from "./upload";
import Result from "./result"
import Recorder from "./recorder";
import About from "./about";

class Routers extends Component{
    render() {
        return(
            <div>
                <BrowserRouter>
                    <Route exact={true} path="/" component={Homepage}/>
                    <Route exact={true} path="/upload" component={Upload}/>
                    <Route exact={true} path="/result" component={Result}/>
                    <Route exact={true} path="/record" component={Recorder}/>
                    <Route exact={true} path="/about" component={About}/>
                </BrowserRouter>
            </div>
        )
    }
}
export default Routers;