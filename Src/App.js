import React,{component} from "react";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={value:""};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value:event.target.value});
  }
  handleSubmit(event){
    alert("You hve submitted all the details successfully:"+this.state.value);
    event.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit} className="form">
        <h1> Form Creation</h1>
        <label>
          Name:<input type="text" value={this.state.value} onChange={this.handleChange}/>

        </label>
        <br/>
        <br/>
        <label>
          Address:<input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <br/>
        <br/>
        <label>
          Phoneno:<input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <br/>
        <br/>
        <label>
          Email:<input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>

        <br/>
        <br/>
        <label>
          Subject:<input type="text" value={this.state.value} onChange={this.handleChange} style={{width:"300px", height:"70px"}}/>
        </label>
        <br/>
        <br/>

        <button type="submit" value="submit" className="button">Submit </button>
      </form>
    );
  }
}

export default App;