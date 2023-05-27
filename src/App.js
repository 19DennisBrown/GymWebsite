import './Styles/App.css';
import Header from './Header.js';
import Main from './Main.js';
import Aside from './Aside.js';
import Footer from './Footer.js';
import Member from './Member.js';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/aside' element={<Aside/>}/>
        <Route path='/member' element={<Member/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
