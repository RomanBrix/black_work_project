import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/main/layouts/inedx";
import Balcony from "./pages/balcony";
import  Main  from "./pages/Main";
import  MainAbout  from "./pages/About";
import { BalconyLayout } from "./components/balcony/layouts/inedx";
import WorkingOn from "./pages/WorkingOn";

function App() {
  return (
    <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Main />}/>

          <Route path='about' element={<MainAbout/>}/>

          <Route path='working' element={<WorkingOn/>}/>
          <Route path='*' element={<h1>Not Found</h1>}/>
        </Route>


        <Route path='/balcony' element={<BalconyLayout/> }>
          <Route index element={<Balcony />}/>
        </Route>
        
    </Routes>
  );
}

export default App;
