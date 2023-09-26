import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      message : 'No Message',
      res: ''
    }
  }

  async componentDidMount(){
    try{ 
      const url = 'http://localhost:3000/api/hello'
      const response = await fetch(url)
      const data = await response.json();
      console.log('data fetched', data );
      this.setState({message : data.message})
      
    }catch(err){
      console.error(err)
    }
    
  }

   sentInfo = async(e)=>{
    try{
      e.preventDefault()
      let inputVal = e.target.parentElement.firstChild.value
      const url = 'http://localhost:3000/api/world';
  
      const data = {
        value: inputVal
      };
  
      const header = {
        method: 'POST',
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify(data)
      };
      
      const response = await fetch(url ,header );
      const datarecived = await response.json();
      this.setState({res : datarecived.message})

    }catch(err){
      console.error(err)
    }
  }
  render(){

    return(
      <div>
        <h1> {this.state.message} </h1>
        <h4>Post to server:</h4>
        <form>
          <input type='text' placeholder='Enter your message'/>
          <button onClick={this.sentInfo} type='submit' >Submit</button>
        </form>
        <p> {this.state.res} </p>
      </div>
    )
  }
}


export default App;