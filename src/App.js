import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';

function App() {

  useEffect(() => {
    //initialize material js para usar todo de materialize
    M.AutoInit();
  },[])
  
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
