import React, { Component } from 'react';

class MyComponent extends Component {

    state = {
        name: " Name : Abdul Mohaimin Rahat",
        age: "Age: 23",
        profession: " Profession: Student",
    }
  
   
    render() {
        
        return (
            <div>
              <p>{this.state.name}</p>
              <p>{this.state.age}</p>
              <p>{this.state.profession}</p>
              <button>Button </button>
            </div>
        );
    }
}

export default MyComponent;