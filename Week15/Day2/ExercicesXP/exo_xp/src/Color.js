import React from 'react';
class Child extends React.Component{

    componentWillUnmount(){
        alert('this component is mounted')
    }

    render(){

        return(
            <div>
                <h1>'Hello World'</h1>
            </div>
        )
    }
}

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: 'red',
            show : true
        };

        // Bind the ChangeColor method to the class instance
        this.ChangeColor = this.ChangeColor.bind(this);
        this.props.getshowVal(this.state.show)
    }

    handelShow(){
        
        this.setState({
            show : this.props.showVal
        })
    }

    ChangeColor(e) {
        e.preventDefault();
        this.setState({ favoriteColor: 'blue' });
    }

    shouldComponentUpdate(nextProps, nextState) {
        // You might want to implement a condition here to decide whether to update or not.
        return true;
    }

    componentDidUpdate() {
        if (this.state.favoriteColor !== 'yellow') {
            setTimeout(() => {
                this.setState({ favoriteColor: 'yellow' });
            }, 1000);
        }

        console.log("after update");
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("in getSnapshotBeforeUpdate");
        return null;
    }

    render() {
        return (
            <div style={{ border: '2px solid black', padding: '10px', margin: '10px' }}>
                <h1>My favorite color is: {this.state.favoriteColor}</h1>
                <button onClick={this.ChangeColor}>Change color</button>
            </div>
        );
    }
}

export { Color, Child};