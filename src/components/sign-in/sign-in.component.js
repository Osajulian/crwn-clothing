import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-in.component.styles.scss'


class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        const { email, password } = this.state
        event.preventDefault()
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                email: '', password: ''
            })
        }catch(error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' label='Email' handleChange={this.handleChange} value={this.state.email} required />
                    <FormInput type='password' name='password' label='Password' handleChange={this.handleChange} value={this.state.password} required />
                    <div className='buttons'> 
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn