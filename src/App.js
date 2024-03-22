import './App.css';
import React from "react";
import Page1 from "./components/Page1";
import Routes from "./router/Routes";
import Page2 from "./components/Page2";
import Route from "./router/Route";
import GNB from "./components/GNB";

function App() {

  return (
      <Routes>
          <Route path={'/'} element={<GNB/>}>
              <Route path={'/1'} element={<Page1/>}/>
              <Route path={'/2'} element={<Page2/>}/>

          </Route>
      </Routes>
  );
}

export default App;
