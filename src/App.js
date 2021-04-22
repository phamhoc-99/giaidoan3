import React from 'react';

//layouts(header+footer)(la nhung phan dung chung cho nhieu trang)
//layout cung phai co 2 cai:1 cai cua home.1 cai cua cac trang khac
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';


//pages
import Homepage from './pages/Homepage';
import './default.scss';
import './pages/Registration/index';
import Registration from './pages/Registration/index';
import {Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/"             render={()=>(<HomepageLayout> <Homepage/> </HomepageLayout>)} />
      <Route exact path="/registration" render={()=>(<MainLayout> <Registration/> </MainLayout>)} />
      </Switch>
    </div>
  );
}

export default App;
