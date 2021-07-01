import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/1-Home'
import ArticlePage from './Components/ArticlePage/1-ArticlePage'
import ScrollToTop from './Other/ScrollToTop'


function App() {
  return (
    <div className="app">
      
        <Switch>
          <Route path='/article/:id/:trackProgress'>
            <ScrollToTop />
            <ArticlePage/>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
