import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Login from './pages/login';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Registeredpage from './pages/registeredpage';
import ForgotPasswd from './pages/forgotpasswd';
import Footers from './components/HeaderFooter/footer';
import Heiexplorer from './pages/hei/heiexplorer';
import Heiprofile from './pages/hei/heiprofile';
import Fundsexplorer from './pages/funds/fundsexplorer';
import Fundsprofile from './pages/funds/fundsprofile';
import Oeprofile from './pages/oe/oeprofile';
import FUNDsidebar from './components/SideBar/FUNDsidebar';
import HEIsidebar from './components/SideBar/HEIsidebar';
import Oesidebar from './components/SideBar/oesidebar';
import Topbar from './components/TopBar/topbar';
import Fundsdashboard from './pages/funds/fundsdashboard';
import Heidashboard from './pages/hei/heidashboard';
import Oedashboard from './pages/oe/oedashboard';
import HeiProposal from './pages/hei/heiproposal';
import Fundsoeevaluation from './pages/funds/fundsoeevaluation';
import Fundschemes from './pages/funds/fundschemes';
import Heiapplying from './pages/hei/heiapplying';
import Oeregister from './pages/oe/oeregister';
import Heiverify from './pages/stakeholder/heiverify';
import Agencyverify from './pages/stakeholder/agencyverify';
import Heiregister from './pages/hei/heiregister';
import Agencyregister from './pages/funds/agencyregister';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/forgotpasswd' element={<ForgotPasswd/>} />
          <Route path='/registeredpage' element={<Registeredpage/>} />
          <Route path='/heiexplorer' element={<Heiexplorer/>} />
          <Route path='/heiprofile' element={<Heiprofile/>} />
          <Route path='/fundsprofile' element={<Fundsprofile/>} />
          <Route path='/fundsexplorer' element={<Fundsexplorer/>} />
          <Route path='/oeprofile' element={<Oeprofile/>} />
          <Route path='/FUNDsidebar' element={<FUNDsidebar/>} />
          <Route path='/HEIsidebar' element={<HEIsidebar/>} />
          <Route path='/oesidebar' element={<Oesidebar/>} />
          <Route path='/topbar' element={<Topbar/>} />
          <Route path='/fundsdashboard' element={<Fundsdashboard/>} />
          <Route path='/heidashboard' element={<Heidashboard/>} />
          <Route path='/oedashboard' element={<Oedashboard/>} />
          <Route path='/heiproposal' element={<HeiProposal/>} />
          <Route path='/fundsoeevaluation' element={<Fundsoeevaluation/>} />
          <Route path='/fundschemes' element={<Fundschemes/>} />
          <Route path='/heiapplying' element={<Heiapplying/>} />
          <Route path='/oeregister' element={<Oeregister/>} />
          <Route path='/heiverify' element={<Heiverify/>} />
          <Route path='/agencyverify' element={<Agencyverify/>} />
          <Route path='/heiregister' element={<Heiregister/>} />
          <Route path='/agencyregister' element={<Agencyregister/>} />
        </Routes>
      </BrowserRouter>
      <Footers/>
    </div>
  );
}

export default App;
