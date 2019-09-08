import React, {Component} from "react";
import AudioRecorder from "react-audio-recorder";

class Recorder extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
               <AudioRecorder/>
            </div>
        );
    }
}
export default Recorder;