import React, {useEffect,Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from  './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import TechListModal from './components/techs/TechListModal';
import AddTechModal from './components/techs/AddTechModal';

import './App.css';

function App() {

  useEffect(() => {
    //initialize material js para usar todo de materialize
    M.AutoInit();
  });


  return (
    <Fragment>
      <SearchBar />
      <div className='container'> 
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <AddBtn />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
