
import './App.css';
import Navbar from './Components/Navbar.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import GamePlay from './Components/Pages/GamePlay';
import SignUp from './Components/Pages/SignUp';
import CardNFTs from './Components/Pages/CardNFTs';
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/GamePlay' component={GamePlay}/>
        <Route path='/cardpacksNFT' component={CardNFTs}/>
        <Route path='/sign-up'   component={SignUp}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
