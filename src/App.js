import { Outlet } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import { ManageUser } from './components/Admin/Content/ManageUser';


const App = ()=>{
  //console.log("prevalue");
  return (
      <div className="app-container">
          <div className='header-container'>
              <Header />
          </div>
          <Outlet />
          {/* <div className='main-container'>
            <ManageUser />
            <div className='sidenav-container'>
              
            </div>
            
          </div> */}

      </div>
  )
}

export default App ;