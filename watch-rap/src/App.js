import './App.css';
import React, { Component } from 'react';
//import { HashRouter, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Twitter from './components/Twitter';
import Youtube from './components/Youtube';
import Spotify from './components/Spotify';
import Instagram from './components/Instagram';
import Home from './components/Home';

// function App() {
//   return (
//     <HashRouter basename='/'>
//     <div>
//      <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/twitter">Twitter</Link></li>
//       <li><Link to="/youtube">Youtube</Link></li>
//       <li><Link to="/spotify">Spotify</Link></li>
//       <li><Link to="/instagram">Instagram</Link></li>
//      </ul>
//      <hr />
//      <Route exact path="/" component={Home} />
//      <Route path="twitter" component={Twitter} />
//      <Route path="youtube" component={Youtube} />
//      <Route path="spotify" component={Spotify} />
//      <Route path="instagram" component={Instagram} />
//     </div>
//    </HashRouter>
//   );
// }

// const Home = () => <div><h2>Home</h2></div>
// const Spotify = () => <div><h2>Spotify</h2></div>
// const Instagram = () => <div><h2>Instagram</h2></div>
// const Twitter = () => <div><TwitTwit></TwitTwit></div>

// export default App;

//const Home = lazy(() => import('./components/Home'));
//const Twitter = lazy(() => import('./components/Twitter'));
//const Youtube = lazy(() => import('./components/Youtube'));
//const Spotify = lazy(() => import('./components/Spotify'));
//const Instagram = lazy(() => import('./components/Instagram'));

class App extends Component {    

    render() {

        return (
        <div>
            <Router>
                <Route exact path="/" render={props => <Home {...props} />} /> 
                <Route exact path="/twitter" render={props => <Twitter {...props} />} />
                <Route exact path="/youtube" render={props => <Youtube {...props} />} />
                <Route exact path="/spotify" render={props => <Spotify {...props} />} />
                <Route exact path="/instagram" render={props => <Instagram {...props} />} />
            </Router>
        </div>
        );
    }
}

export default App;

