import {Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './layouts/RootLayout';


//pages
import Index from './pages/Index';
import AboutUs from './pages/AboutUs';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Projects from './pages/Projects';
import RandD from './pages/RandD';

//ProjectsPages
import DarcyDrive from './project-pages/DarcyDrive';
import ImperialRoad from './project-pages/ImperialRoad'
import TownshipAldborough from './project-pages/TownshipAldborough';
import VictoriaSquare from './project-pages/VictoriaSquare';
import BlandfordBlenheim from './project-pages/BlandfordBlenheim';
import OxfordStreet from './project-pages/OxfordStreet';
import WaterlooStreet from './project-pages/WaterlooStreet';
import CliveRoad from './project-pages/CliveRoad';
import SiouxLookout from './project-pages/SiouxLookout';
import Highbury from './project-pages/Highbury';
import Islington from './project-pages/Islington';
import GlenForrest from './project-pages/GlenForrest';

const router=createBrowserRouter(
  createRoutesFromElements(
    <> 
      <Route path='' element={<RootLayout/>}>
        <Route path='/' element={<Index/>} />
        <Route path='aboutus' element={<AboutUs/>}/>
        <Route path='career' element={<Career/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='randd' element={<RandD/>} />
        <Route path='services' element={<Services/>} />
        <Route path='projects' element={<Projects/>} />

        {/* Projects */}
        <Route path='DarcyDrive' element={<DarcyDrive/>} />
        <Route path='ImperialRoad' element={<ImperialRoad/>} />
        <Route path='TownshipAldborough' element={<TownshipAldborough/>} />
        <Route path='VictoriaSquare' element={<VictoriaSquare/>} />
        <Route path='BlandfordBlenheim' element={<BlandfordBlenheim/>} />
        <Route path='OxfordStreet' element={<OxfordStreet/>} />
        <Route path='WaterlooStreet' element={<WaterlooStreet/>} />
        <Route path='CliveRoad' element={<CliveRoad/>} />
        <Route path='SiouxLookout' element={<SiouxLookout/>} />
        <Route path='Highbury' element={<Highbury/>} />
        <Route path='Islington' element={<Islington/>} />
        <Route path='GlenForrest' element={<GlenForrest/>} />
      </Route>
    </>
)
)

function App() {
  return (
    <div className='container'>
      <RouterProvider router={router}/>
    </div> 
  );
}

export default App;
