import React, {Component} from "react"
import axios from "axios"
import Result from "./result";
import "./style.css"
class Upload extends Component{
    constructor(props){
        super(props);
        this.state = {
            file:[],
            filename:'',
            redirect:false,
            model_name: '',
        };
        this.addFile = this.addFile.bind(this);
        this.addModel = this.addModel.bind(this);
    }
    addModel = (e) => {
      e.preventDefault();
      const model_name = e.target.value;
      if(model_name){
          this.setState(() => ({
              model_name: model_name
          }))
      }
    };
    addFile = (e) => {
        e.preventDefault();
        console.log("the model name is ", this.state.model_name);
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };
        const url = 'http://127.0.0.1:5000/upload';
        if(data){
            axios.post(url,data,config)
                .then(res => {
                    console.log("successfully upload file ", res.data);
                    this.setState(() => ({
                        filename: res.data,
                        redirect: true,
                    }))
                })
                .catch(err => console.log("error in uploding ", err))
        }
    };
    render() {
        return (
            <div className="upload-area">


                <h2>Upload</h2>
                <br/>
                <form onSubmit={this.addFile}>
                    <input ref={(ref) => { this.uploadInput = ref; }} type="file" id="file"/>
                    <label for="file"><img src={require("./uploading.svg")} alt=""
                                           width={10} height={10}/>
                                           upload
                    </label>
                    <br/>
                    <div className="btw"></div>
                    <button className="btn">submit</button>
                </form>
                <div className="bottom"></div>
                <div>
                    <select onClick={this.addModel}>
                        <option value="resnet">Resnet</option>
                        <option value="feedforward">Feedforward</option>
                        <option value="transformer">Transformer</option>
                    </select>
                </div>

                {this.state.redirect && <div className="in-result">
                    <Result
                        filename={this.state.filename}
                        model_name = {this.state.model_name}
                    />
                </div>}
            </div>
        )
    }
}

export default Upload;



