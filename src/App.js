import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat'
import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { useState } from 'react';
import { useStateValue } from './StateProvider';
function App() {
  // const [user, setuser] = useState(null);

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
    {
      !user ? (
       <Login />
      ):(
        <>
        <Router>
    <Header />
      <div className="app__body">
        <Sidebar />
          <Switch>
<Route path="/room/:roomID">
  <Chat />
</Route>
<Route path="/">
  <h1>Open Channel</h1>
</Route>

          </Switch>
      
      </div>
  
      </Router>

        </>
      )
    }

    </div>
  );
}

export default App;
