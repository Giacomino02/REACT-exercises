import React from "react";

class ClickCounter extends React.Component{
    state = {count: 0};

    counterIncrement = () => {
        this.setState((state) => {
            return {
                count: state.count + 1
            };
        });
    };

    render(){
        return(
            <>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.counterIncrement}>Increment button</button>
            </>
        )
    }
}

export default ClickCounter;