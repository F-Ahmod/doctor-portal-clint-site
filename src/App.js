import './App.css';
import {
  BrowserRouter ,
  Switch,
  Route,
 
} from "react-router-dom";
import Home from './Home/Home/Home';
import Apponment from './Home/Apponment/Apponment/Apponment';
import Login from './Home/Login/Login';
import Registration from './Home/Registration/Registration';
import AuthProvider from './Home/Context/AuthProvider';
import DashBoard from './Home/DashBoard/DashBoard/DashBoard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Switch>
        <Route exact path="/apponment">
        <Apponment></Apponment>
        </Route>
        <Route path="/home">
        <Home ></Home>
        </Route>
        <Route path="/login">
        <Login ></Login>
        </Route>
        <Route path="/registration">
        <Registration></Registration>
        </Route>
        <Route path="/dashboard">
        <DashBoard></DashBoard>
        </Route>
        <Route exact path="/">
        <Home ></Home>
        </Route>
      </Switch>
      </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
