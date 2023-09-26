import React from 'react'
import './Cstyle.css'

class Calculate extends React.Component{

    constructor(){
        super()
        this.state = {
            number1 : '',
            number2 : '',
            res : ''
        }
    }
    handelChangeForNum1 = (e) =>{
        this.setState({number1 : e.target.value})
    }
    handelChangeForNum2 = (e) =>{
        this.setState({number2 : e.target.value})
    }
    calcNumbers = (e) =>{
        e.preventDefault()
        const {number1, number2} = this.state;
        console.log(this.state)

        var result = parseFloat(number1) + parseFloat(number2);

        this.setState({ res : result })
    }
    
    render(){
        return(
            <div id='screen'>
                <div id='cart'>
                    <h1>Adding Two Numbers</h1>
                    <div id='inps'>
                        <input type='text' id='number1' placeholder='First number' onChange={this.handelChangeForNum1}></input>
                        <input type='text' id='number2' placeholder='Second number' onChange={this.handelChangeForNum2}></input>
                    </div>
                    <button id='calc' onClick={this.calcNumbers}>Add Them</button>
                    <div id='result'>{this.state.res}</div>
                </div>
            </div>
        )
    }
    
    
}

export default Calculate;