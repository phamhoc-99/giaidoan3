import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import './default.scss';
import {auth, handleUserProfile} from './firebase/utils';

//layouts(header+footer)(la nhung phan dung chung cho nhieu trang)
//layout cung phai co 2 cai:1 cai cua home.1 cai cua cac trang khac
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

//pages
import Homepage from './pages/Homepage/index';
import Registration from './pages/Registration/index';
import Login from './pages/Login/index';

const initialState={
  currentUser:null
};
class App extends Component {

constructor(props){
  super(props);
  this.state={...initialState};
}

authListener=null;
componentDidMount(){//goi 1 lan dau tien
  this.authListener=auth.onAuthStateChanged(async userAuth=>{
if(userAuth) {const userRef=await handleUserProfile(userAuth);
userRef.onSnapshot(snapshot=>{this.setState({
  currentUser:{
    id: snapshot.id,
    ...snapshot.data()
  }
 }) }) }
this.setState({ ...initialState});
  });
} 
componentWillUnmount(){//chuan bi xoa khoi dom
  this.authListener();
}

render(){
  const {currentUser}=this.state;
  return (
    <div className="App">
      <Switch>
      <Route exact path="/"             render={()=>(<HomepageLayout currentUser={currentUser}> <Homepage/> </HomepageLayout>)} />
      <Route exact path="/registration" render={()=>
        currentUser ? <Redirect to="/"/> : 
        (<MainLayout currentUser={currentUser}> <Registration/> </MainLayout>)} />
      <Route exact path="/login" render={()=>
        currentUser ? <Redirect to="/" /> :          //login thanh cong thi mo trang chu
        (<MainLayout currentUser={currentUser}> <Login/> </MainLayout>)} />  {/* that bai thi mo trang login */}
      </Switch>
    </div>
  );
}}

export default App;
