import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>Sign in with your email and password</h2>
                <span>I already have an account</span>
                <form onSubmit={this.handleSubmit}>

                    <FormInput
                        name="email"
                        type="email"
                        label="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />
                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        )
    }
}

export default SignIn;