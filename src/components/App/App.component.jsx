import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/Home'));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
