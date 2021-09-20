// import logo from './logo.svg';
import './App.css';
import Create from './components/Create';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Update from './components/Update';
import Read from './components/Read';



function App() {
  return (
    <Router>
    <div className="App">
      <h1>Create/Add to fakeDatabase</h1>
      <a className="read" href="/">Add a Data</a>
      <a className="read" href="/read">Read</a>
      <div>
    <Route exact path="/" component={Create} />
    </div>
    <div>
      <Route exact path="/update" component={Update} />
    </div>
      <Route exact path="/read" component={Read} />
    </div>
    </Router>
  );
}

export default App;
