import './App.css';
import { BrowserRouter as Router,Route, Routes, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Mainpage from './Coffee/Main/Mainpage';

import Cardcoffee from './Coffee/Pages/Cardcoffee';
import Lastpage from './Coffee/Pages/Lastpage';
import Footer from './Coffee/Pages/Footer';


function App() {
  return (
    <div className="App">
     
     <Router>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
         <Route path='card' element={<Cardcoffee/>}/>
         <Route path='/last'element={<Lastpage/>}/>
         <Route path='/footer' element={<Footer/>}/>
      </Routes>
     </Router>
    </div>
    
   
  );
}

export default App;
