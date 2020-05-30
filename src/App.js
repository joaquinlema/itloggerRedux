import React, {useEffect,Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from  './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import './App.css';

function App() {

  useEffect(() => {
    //initialize material js para usar todo de materialize
    M.AutoInit();
  });

  const addLog = (item) => {
    console.log(item);
  }

  return (
    <Fragment>
      <SearchBar />
      <div className='container'> 
        <AddLogModal addLog={addLog}/>
        <AddBtn />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
