import { Outlet } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';


const App = ()=>{
  //console.log("prevalue");
  return (
      <div className="app-container">
          <div className='header-container'>
              <Header />
          </div>
          <div className='main-container'>
            <div className='sidenav-container'>
              {/* <buttom className='btn btn-primary'>Test</buttom> */}
            </div>
            <div className='sidenav-container'>
              <Outlet />
            </div>
          </div>

      </div>
  )
}

export default App ;