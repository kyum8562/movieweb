import React, {useState, useEffect} from 'react';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Search from './routes/Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import NotFound from './routes/NotFound';

// router render
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
     {/*한 번에 하나의 라우터만 렌더링 하기 위해 Switch용  */}
      {/*Route 안에 컴포넌트 적어줌 */}
      {/* Home : 유저가 홈화면으로  갈 때의 Route */}
      {/* Detail : 유저가 세부화면으로 갈 때의 Route */}
      <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />} />
      <Route path={`${process.env.PUBLIC_URL}/1`} element={<Home />} />
      <Route path="/" element={<Search />} />

      {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */} 
      {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;