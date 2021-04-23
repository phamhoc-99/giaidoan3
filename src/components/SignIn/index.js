import React,{Component} from 'react';
import './styles.scss';
import Buttons from '../../components/forms/Button';
import {signInWithGoogle,auth} from '../../firebase/utils';

import FormInput from '../forms/FormInput';

const initialState={
email:'',
password:''
};

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            ...initialState
        };
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e){
        const {name,value}=e.target;
        this.setState({ [name]:value });
    }

    handleSubmit= async e=>{
    e.preventDefault();
    const {email,password}=this.state;
    try {
        await auth.createUserWithEmailAndPassword(email,password);
        this.setState({...initialState});
    } catch (error) {
        console.log('loi')
    }
}

    render(){
const {email,password}=this.state;
        return(
        <div className="signin">
            <div className="wrap">
            <h2>LogIn</h2>

            <div className="formWrap">
                <form onSubmit={this.handleSubmit}>

                    <FormInput
                    type={email}
                    name={email}
                    value={email}
                    placeholder="email"
                    handleChange={this.handleChange}
                    />

                    <FormInput
                    type={password}
                    name={password}
                    value={password}
                    placeholder="password"
                    handleChange={this.handleChange}
                    />

                    <Buttons type="submit">
                        Login
                    </Buttons>

                    <div className="socialSignin">
                        <div className="row">
                            <Buttons onClick={signInWithGoogle}>
                                Sign in with Google
                            </Buttons>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );   
    }
}

export default SignIn;