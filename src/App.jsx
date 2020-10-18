import React from 'react';
import { Route, Switch } from 'react-router';
import './assets/styles/reset.css';
import './assets/styles/style.css';
import Top from './components/Top';
import QuestionList from './components/questions/QuestionList';


const App = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Top} />
      <Route exact path={"/question/:id"} component={QuestionList} />
    </Switch>
  )
}

export default App;
