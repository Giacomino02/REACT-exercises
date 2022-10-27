// import { type } from '@testing-library/user-event/dist/type';
import React from "react";


class Login extends React.Component {
    state = {
        username: '',
        password: '',
        checkbox: false
    };

    handleInputEvent = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const checked = event.target.checked;
        const type = event.target.type;
        this.setState({
            [name]: type === 'checkbox' ? checked : value
        });
    };

    render() {
        return (
            <form>
                <label>
                    Name
                    <input type='text' name='username' value={this.state.username} onChange={this.handleInputEvent}/>
                </label>

                <label>
                    Password 
                    <input type='password' name='password' value={this.state.password} onChange={this.handleInputEvent}/>
                </label>

                <label>
                    Remember me
                    <input type='checkbox' name='checkbox' checked={this.state.checkbox} onChange={this.handleInputEvent}/>
                </label>
            </form>
        );
    }
}

export default Login