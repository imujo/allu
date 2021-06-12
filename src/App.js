import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/1-Home'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
