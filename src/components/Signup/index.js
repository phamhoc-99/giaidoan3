import React ,{Component} from 'react';
import './styles.scss';

import {auth,handleUserProfile} from '../../firebase/utils';//3 signup:firebase

import FormInput from '../../components/forms/FormInput';
import Button from '../../components/forms/Button';

const initialState={ //1 signup: khoi tao state trong component signup
displayName:'',
email:'',
password:'',
confirmPassword:'',
errors:[]
};

class Signup extends Component{
    constructor(props){
        super(props);
        this.state={...initialState};
        this.handleChange=this.handleChange.bind(this);
    }

handleChange(e){    //2 signup:them 1 phuong thuc onchange trong component signup 
const {name,value}=e.target;
this.setState({ [name]:value });
}

handleFormSubmit=async event=>{//4 signup
event.preventDefault();
const {displayName,email,password,confirmPassword}=this.state;
if(password!==confirmPassword) {
    const err=['password don\'t match'];
    this.setState({ errors:err});
    return;} 
    
try {
  const {user}= await auth.createUserWithEmailAndPassword(email,password);//tao tai khoan 
   await handleUserProfile(user,{displayName}); 
   this.setState({...initialState });
} catch (err) {
}

}

render(){
        const{displayName,email,password,confirmPassword,errors}=this.state;//khai bao state
        return(
            <div className="signup">
            <div className="wrap">
            <h2>Signup</h2>

{errors.length > 0 && (                  //pass dont match
                <ul>
{errors.map((err,index)=>{
    return( 
         <li key={index}>
         {err}
         </li> );})}
                </ul>
            )}

            <div className="formWrap">
            <form onSubmit={this.handleFormSubmit}>
                <FormInput 
                type="text"
                name="displayName"
                value={displayName}
                placeholder="full name"
                onChange={this.handleChange}
                />
                <FormInput 
                type="email"
                name="email"
                value={email}   //truyen state
                placeholder="email"
                onChange={this.handleChange}
                />
                <FormInput 
                type="password"
                name="password"
                value={password}
                placeholder="password"
                onChange={this.handleChange}
                />
                <FormInput 
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="confirm password"
                onChange={this.handleChange}
                />

                <Button type="submit">Register</Button>

            </form>
            </div>
            </div>
            </div>
        );
    }
}

export default Signup;
