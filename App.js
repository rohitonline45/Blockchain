import './App.css';
import Nav from './nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home';
import Login from './components/login';
import Createpoll from './components/createpoll';
import results from './components/results';
import register from './components/register';
import Signup from './components/signup';
import Err from './components/err';
import Protected from './components/Protected';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/results' component={results}></Route>
        <Route exact path='/register' component={register}></Route>
        <Route exact path='/signup' component={Signup}></Route>
        <Route exact path='/protected' component={Protected}></Route>
        <Route exact path='/createpoll' component={Createpoll}></Route>
        <Route exact path='*' component={Err}></Route>
        <Protected path='/createpoll' auth={false} component={Createpoll}/>
      </Switch>
    </Router>
  );
}

export default App;
