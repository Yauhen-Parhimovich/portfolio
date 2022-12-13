import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {router} from './router';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        {router.map(route => {
          return (
            <Route exact path={route.path} element={route.component} key={route.path}/>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
