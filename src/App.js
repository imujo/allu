import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/1-Home'
import ArticlePage from './Components/ArticlePage/1-ArticlePage'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path='/article'>
          <ArticlePage />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
