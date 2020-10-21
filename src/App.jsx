import React from 'react';
import { Route, Switch } from 'react-router';
import './assets/styles/reset.css';
import './assets/styles/style.css';
import Top from './components/Top';
import QuestionList from './components/questions/QuestionList';
import ScrollToTop from './components/UIkit/ScrollToTop';

const App = () => {
  return (
    <div className={"backStyle"}>
      <Switch>
        <ScrollToTop>
          <Route exact path={"/"} component={Top} />
          <Route exact path={"/question/:id"} component={QuestionList} />
        </ScrollToTop>
      </Switch>
    </div>

  )
}

export default App;
