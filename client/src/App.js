import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import About from './pages/about';
import Registeredpage from './pages/registeredpage';
import ForgotPasswd from './pages/forgotpasswd';
import Heiexplorer from './pages/hei/heiexplorer';
import Heiprofile from './pages/hei/heiprofile';
import Oeprofile from './pages/oe/oeprofile';
import HEIsidebar from './components/SideBar/HEIsidebar';
import Oesidebar from './components/SideBar/oesidebar';
import Topbar from './components/TopBar/topbar';
import Heidashboard from './pages/hei/heidashboard';
import Oedashboard from './pages/oe/oedashboard';
import Oeregister from './pages/oe/oeregister';
import Heiverify from './pages/stakeholder/heiverify';
import Agencyverify from './pages/stakeholder/agencyverify';
import Heiregister from './pages/hei/heiregister';
import Agencyregister from './pages/funds/agencyregister';
import FundSideBar from './components/SideBar/FUNDsidebar';
import FundSchemes from './pages/funds/fundschemes';
import FundsOeEvaluation from './pages/funds/fundsoeevaluation';
import FundsDashboard from './pages/funds/fundsdashboard';
import FundsProfile from './pages/funds/fundsprofile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar/> */}
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/agencyregister' element={<Agencyregister />} />
          <Route path='/forgotpasswd' element={<ForgotPasswd />} />
          <Route path='/registeredpage' element={<Registeredpage />} />
          <Route path='/heiregister' element={<Heiregister />} />
          <Route path='/oeregister' element={<Oeregister />} />
          <Route path='/fundsprofile' element={<FundsProfile />} />
          <Route path='/fundsoeevaluation' element={<FundsOeEvaluation />} />
          <Route path='/fundschemes' element={<FundSchemes />} />
          <Route path='/fundsdashboard' element={<FundsDashboard />} />
          <Route path='/heidashboard' element={<Heidashboard />} />
          <Route path='/heiexplorer' element={<Heiexplorer />} />
          <Route path='/heiprofile' element={<Heiprofile />} />
          <Route path='/HEIsidebar' element={<HEIsidebar />} />
          <Route path='/oeprofile' element={<Oeprofile />} />
          <Route path='/oesidebar' element={<Oesidebar />} />
          <Route path='/topbar' element={<Topbar />} />
          <Route path='/oedashboard' element={<Oedashboard />} />
          <Route path='/FUNDsidebar' element={<FundSideBar />} />
          <Route path='/heiverify' element={<Heiverify />} />
          <Route path='/agencyverify' element={<Agencyverify />} />
        </Routes>
      </BrowserRouter>
      {/* <Footers/> */}
    </div>
  );
}

export default App;
