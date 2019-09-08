import React, {Component} from "react";
import axios from "axios"
import "./style.css"
import CanvasJSReact from './assets/canvasjs.react';
import {Link} from "react-router-dom";
import "./hindi.svg"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Result extends Component{
    constructor(props){
        super(props);
        this.state = {
            filename: '',
            Hindi: null,
            Marathi: null,
            Tamil: null,
            Telugu: null,
            Gujarati: null,

        };
    }
      componentDidMount() {
        const url = `http://127.0.0.1:5000/uploads/${this.props.filename}`;
        axios.get(url)
            .then(res => {

                console.log(res.data.Hindi, res.data.Marathi,
                    res.data.Tamil, res.data.Telugu, res.data.gujarati
                    );
                this.setState(() => ({
                    Hindi: res.data.Hindi,
                    Marathi: res.data.Marathi,
                    Tamil: res.data.Tamil,
                    Telugu: res.data.Telugu,
                    Gujarati: res.data.gujarati,

                }))
            })
            .catch(err => console.log(err));


          this.scrollToBottom();
      }
      componentDidUpdate(prevProps, prevState, snapshot) {
        this.scrollToBottom();
      }
    scrollToBottom() {
        this.el.scrollIntoView({ behavior: 'smooth' });
    }

    render() {

        const options = {
            title:{
                text: "Voice",
                fontsize: 20,
                fontColor: "#EFDAB9"
            },
            legend: {
                fontColor:  "#EFDAB9",
            }                         ,
            backgroundColor: "#343233",
            animationEnabled: true,
            subtitles: [{
               text: "voice",
               verticalAlign: "center",
               fontsize: 20,
               dockInsidePlotArea: true,
               fontColor: "#EFDAB9",
            }],
            data: [
                {   indexLabelPlacement: "inside",
                    showInLegend: true,
                    indexLabel: "{y}",
                    yValueFormatString: "#,###'%'",
                    type: "doughnut",
                    dataPoints: [
                        {label: "Hindi", y:this.state.Hindi*100, legendText: "Hindi"},
                        {label: "Marathi", y:this.state.Marathi*100, legendText: "Marathi"}    ,
                        {label: "Tamil", y:this.state.Tamil*100, legendText: "Tamil"},
                        {label: "Telugu", y:this.state.Telugu*100, legendText: "Telugu"},
                        {label: "gujarati", y:this.state.Gujarati*100, legendText: "Gujarati"},
                    ]
                }
            ]
        };
        return (
            <div>
            <div className="result-container">
            <div className="result-graph">
                        <CanvasJSChart options={options}
                        />
                <div ref={el => { this.el = el; }} />
            </div>
                <div>
                    {console.log("result array ", this.state.result)}
                </div>
                <br/>
                <div className="cards">
                    <img className="hindi" src={require("./againkaa.jpg")} alt="Hindi"/>
                    <br/>
                    <p>Hindi: {Math.round(this.state.Hindi*100)}% </p>

                    <img className="gujarati" src={require("./a.jpg")} alt="gujarati"/>
                    <br/>
                    <p>Gujarati: {Math.round(this.state.Gujarati*100)}%</p>
                    <img className="telugu" src={require("./telu again.PNG")} alt="telugu"/>
                    <br/>
                    <p>Telugu: {Math.round(this.state.Telugu*100)}%</p>
                    <img className="tamil" src={require("./tamil.PNG")} alt="Tamil"/>
                    <br/>
                    <p>Tamil: {Math.round(this.state.Tamil*100)}%</p>
                </div>
            </div>
            </div>
        );
    }
}

export default Result;