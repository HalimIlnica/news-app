import React from 'react';
import './App.css';
import NewsPage from './pages/NewsPage/NewsPage.component';
import NewsDetailsPage from './pages/NewsDetailsPage/NewsDetailsPage.component';
import {BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom'
import News from './pages/News/News.component';


function RedirectTo(pathname) {
  return() => (<Redirect to={{pathname}} />);
}

function App({title}) {
  return (
    <div className="App">
      <Router>
        <Switch>

         <Route exact  path='/' component={RedirectTo('/news')} />
         <Route exact  path='/news' component={News} />


         <Route exact  path='/news/create' component={NewsPage} />
         <Route exact  path='/news/:id' component={NewsDetailsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
