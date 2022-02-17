import React, {useState, useEffect} from 'react';
import Button from './components/Button';
import List from './components/List';
import styles from './components/App.module.css';
import Home from './routes/Home';
import Detail from './routes/Detail';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// router render
function App() {
  return (
  <Router>
     {/*한 번에 하나의 라우터만 렌더링 하기 위해 Switch 사용  */}
    <Switch>
      {/*Route 안에 컴포넌트 적어줌 */}
      {/* Home : 유저가 홈화면으로 갈 때의 Route */}
      {/* Detail : 유저가 세부화면으로 갈 때의 Route */}
      <Route basename={process.env.PUBLIC_URL} path="/movie/:id">
        <Detail />
      </Route>
      <Route path={`${process.env.PUBLIC_URL}/`} element={< Home />}>
        <Home></Home>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
