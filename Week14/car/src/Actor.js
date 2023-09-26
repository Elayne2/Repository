import React from 'react';

class Actor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: "actor",
      firstname: "Gal",
      lastname: "Gadot",
      image: ""
        };
    }

    render() {
        return (
            <div>
                <form>
                            <label for="firstname">First name:</label>
                            <input type="text"id="lname" name="lname"></input>
                            <label for="lastname">Last name:</label>
                            <input type="text" id="lname" name="lname"/>
                            <input type="submit" value="Submit" id="submit"/>
                        </form>
            </div>
       
        )
    }
}

export default Actor;